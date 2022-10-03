import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../Data';

function FilteredSearchEvents() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return (
      <div>
        <h4>Loading....</h4>
      </div>
    );
  }

  const yearFiltered = slug[0];
  const monthFiltered = slug[1];

  const numYear = +yearFiltered;
  const numMonth = +monthFiltered;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2040 || numMonth > 12) {
    return (
      <div>
        <h4>Failed to have Events</h4>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    <div>
      <h4>No filtered events found</h4>
    </div>;
  }
  console.log(filteredEvents);

  return <div>FilteredSearchEvents</div>;
}

export default FilteredSearchEvents;
