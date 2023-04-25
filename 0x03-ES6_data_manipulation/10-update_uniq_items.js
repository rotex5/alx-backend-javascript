function updateUniqueItems(mapParams) {
  if (!(mapParams instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapParams) {
    if (value === 1) {
      mapParams.set(key, 100);
    }
  }
}

export default updateUniqueItems;
