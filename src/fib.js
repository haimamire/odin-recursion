export function fib(length) {
  const array = [0];

  while (true) {
    if (array.length === length) break;

    const lastIndex = array.length - 1;
    const newValue =
      array[lastIndex] === 0 ? 1 : array[lastIndex] + array[lastIndex - 1];
    array.push(newValue);
  }
  return array;
}

export function fibRec(length, array = [0]) {
  if (array.length === length) return array;

  const lastIndex = array.length - 1;
  const newValue =
    array[lastIndex] === 0 ? 1 : array[lastIndex] + array[lastIndex - 1];
  array.push(newValue);

  return fibRec(length, array);
}