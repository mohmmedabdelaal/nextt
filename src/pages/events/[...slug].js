import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
import { getFilteredEvents } from '../../Data';

function FilteredSearchEvents() {
  const { query } = useRouter();
  const slug = query.slug;
  console.log(slug);

  if (!slug) {
    return (
      <div className="center">
        <h3>Loading....</h3>
      </div>
    );
  }
  const yearSlug = slug[0];
  const monthSlug = slug[1];

  const numYear = +yearSlug;
  const numMonth = +monthSlug;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2035 || numMonth > 12) {
    return (
      <div className="center">
        <h3>No Events have found</h3>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <h3>Found no Filtered Events</h3>
      </div>
    );
  }

  console.log(filteredEvents);
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}




export default FilteredSearchEvents;

