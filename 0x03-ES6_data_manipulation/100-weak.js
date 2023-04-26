export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = 0;

  count = weakMap.get(endpoint) || 0;
  /*
   * We then use the get method of the WeakMap to retrieve
   * the current count for this endpoint. If the count does
   * not exist yet (i.e., the endpoint has not been queried
   * before), we set the count to 0. We increment the count
   * by 1 and check if it's greater than or equal to 5. If it
   * is, we throw an error with the message 'Endpoint load is
   * high'. If not, we update the count for this endpoint in
   * the WeakMap using the set method.
  */
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count += 1);
}
