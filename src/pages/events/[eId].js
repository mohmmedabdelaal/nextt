import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getDataById } from '../../Data';
import EventContent from '../../event-detail/event-content';
import EventSummary from '../../event-detail/event-summary';
import EventLogistics from '../../event-detail/event-logistics';
import EventLogisticsItem from '../../event-detail/logistics-item';

function SingleEvent() {
  const { query } = useRouter();
  if (query.eId === undefined) {
    return <div>Loading...</div>;
  }
  const singleEvent = getDataById(query.eId);
  const { title, description, location, date, image } = singleEvent;

  return (
    <Fragment>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  );
}

export default SingleEvent;
