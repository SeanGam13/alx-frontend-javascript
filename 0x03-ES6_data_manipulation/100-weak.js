const weakMap = new WeakMap();
function queryAPI(endPoint) {
  let callNum = weakMap.get(endPoint) || 0;
  callNum += 1;
  if (callNum >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endPoint, callNum);
}

export { weakMap, queryAPI };
