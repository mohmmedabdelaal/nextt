import React from 'react';
import EventItem from './EventItem';

function EventList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default EventList;
