export default function binarySort(array, number) {
  result = 0;
  start = 0;
  end = array.length -1;

  while(start <= end) {
    var midpoint = (start + end) / 2;
    if(array[midpoint] === end) {
      result = midpoint;
    } else if(array[midpoint] < end) {
      end = midpoint - 1;
    } else if(array[midpoint] > end) {
      start = midpoint + 1;
    }
    return result;
  }
}
