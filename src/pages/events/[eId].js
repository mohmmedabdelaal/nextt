import { Fragment } from 'react';

import { getAllEvents } from '../../helpers/api-utils';
import EventContent from '../../event-detail/event-content';
import EventSummary from '../../event-detail/event-summary';
import EventLogistics from '../../event-detail/event-logistics';
import { getDataById } from '../../helpers/api-utils';

function SingleEvent({ singleEvent }) {
  const eventSingleId = singleEvent;
  const { title, description, location, date, image } = eventSingleId;

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

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((event) => ({ params: { eId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventId = params.eId;

  const event = await getDataById(eventId);

  return {
    props: {
      singleEvent: event,
    },
    revalidate: 20,
  };
}

export default SingleEvent;
