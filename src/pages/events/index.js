import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
import EventSearch from './EventSearch';
import { getAllEvents } from '../../helpers/api-utils';

function Events({ mainEvents }) {
  const router = useRouter();

  const filteredEventsHandler = (year, month) => {
    const eventsUrl = `/events/${year}/${month}`;

    router.push(eventsUrl);
  };
  return (
    <div>
      <EventSearch onSearch={filteredEventsHandler} />
      <EventList items={mainEvents} />
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      mainEvents: allEvents,
    },
  };
}
