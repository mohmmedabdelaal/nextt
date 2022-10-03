import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
import { getAllEvents } from '../../Data';
import EventSearch from './EventSearch';

function Events() {
  const router = useRouter();
  const allEvents = getAllEvents();
  console.log(allEvents);
  const filteredEventsHandler = (year, month) => {
    const eventsUrl = `/events/${year}/${month}`;

    router.push(eventsUrl);
  };
  return (
    <div>
      <EventSearch onSearch={filteredEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export default Events;
