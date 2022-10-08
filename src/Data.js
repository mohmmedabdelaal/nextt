export function getFeaturedData() {
  return DUMMY_EVENTS.filter((d) => d.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dataFilter) {
  const { year, month } = dataFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getDataById(id) {
  return DUMMY_EVENTS.find((d) => d.id === id);
}
