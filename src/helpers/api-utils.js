export const getAllEvents = async () => {
  const response = await fetch(
    'https://events-d1e24-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();

  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getFeaturedData = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((d) => d.isFeatured);
};

export async function getDataById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((d) => d.id === id);
}
