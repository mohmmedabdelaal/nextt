import React from 'react';

function EventItem({ title, description, date, image }) {
  return (
    <li>
      <div className="container">
        <div className="card">
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={image} alt="" />
        </div>
      </div>
    </li>
  );
}

export default EventItem;
