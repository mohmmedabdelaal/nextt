import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.module.css';
import EventList from '../components/EventList';
import { getFeaturedData } from '../helpers/api-utils';

export default function Home({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const featuredEvents = await getFeaturedData();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
