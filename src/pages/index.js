import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import { getFeaturedData } from '../Data';
import EventList from '../components/EventList';

export default function Home() {
  const featuredEvents = getFeaturedData();
  return <div>
    <EventList items={featuredEvents}/>
  </div>;
}
