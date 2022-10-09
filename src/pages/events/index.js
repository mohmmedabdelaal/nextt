import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
// import { getAllEvents } from '../../Data';
import EventSearch from './EventSearch';

function Events({ mainEvents }) {
  console.log(mainEvents);
  const router = useRouter();
  // const allEvents = getAllEvents();
  // console.log(allEvents);
  const filteredEventsHandler = (year, month) => {
    const eventsUrl = `/events/${year}/${month}`;

    router.push(eventsUrl);
  };
  return (
    <div>
      <EventSearch onSearch={filteredEventsHandler} />
      {/* <EventList items={allEvents} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://events-d1e24-default-rtdb.firebaseio.com/events.json'
  )
    .then((res) => res.json())
    .then((data) => data);
  // const data = await response.json();

  const defaultEvents = [];

  for (let key of response) {
    defaultEvents.push({
      id: key,
      data: data[key].date,
      description: data[key].description,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      location: data[key].location,
      title: data[key].title,
    });
  }

  return {
    props: {
      mainEvents: defaultEvents,
    },
  };
}

export default Events;
