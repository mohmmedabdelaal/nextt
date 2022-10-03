import Link from 'next/link';
import classes from './EventItem.module.css';
import Button from '../ui/Button';

function EventItem({ title, location, date, image, id }) {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const realLocation = location.replace(', ', '\n');

  const eventLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
            <div className={classes.date}>
              <time>{readableDate}</time>
            </div>
            <div className={classes.address}>
              <address>{realLocation}</address>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={eventLink}>To details</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
