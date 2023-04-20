import ClassRoom from './0-classroom';

// const room = new ClassRoom(19);

function initializeRooms() {
  const values = [19, 20, 34];
  const result = [];

  for (const value of values) {
    const room = new ClassRoom(value);
    result.push(room);
  }
  return result;
}

export default initializeRooms;
