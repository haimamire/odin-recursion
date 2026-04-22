export function mergeSort(array) {
  const arrayLength = array.length;

  if (arrayLength <= 1) return array;

  const leftSide = mergeSort(array.slice(0, arrayLength / 2));
  const rightSide = mergeSort(array.slice(arrayLength / 2));
  const sortedArray = [];

  while (true) {
    if (leftSide.length === 0) {
      sortedArray.push(...rightSide);
      break;
    } else if (rightSide.length === 0) {
      sortedArray.push(...leftSide);
      break;
    }

    leftSide[0] < rightSide[0]
      ? sortedArray.push(leftSide.shift())
      : sortedArray.push(rightSide.shift());
  }

  return sortedArray;
}
