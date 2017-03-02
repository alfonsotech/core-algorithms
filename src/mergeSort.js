export default function mergeSort(array) {

  if ( array ) {
      array = array.map(function(item) { return item; });
    }

    sort(array, array.length);
    return array;

  function sort(array, n) {
    var width,
        i;

    for ( width = 1; width < n; width = width * 2 ) {
      for ( i = 0; i < n; i = i + 2 * width ) {
        merge(array, i, Math.min(i + width, n), Math.min(i + 2 * width, n));
      }
    }
  }

  function merge(array, left, right, end) {
    var n = left,
        m = right,
        currentSort = [],
        j;

    for ( j = left; j < end; j++ ) {
      if ( n < right && ( m >= end || array[n] < array[m] )) {
        currentSort.push(array[n]);
        n++;
      }
      else {
        currentSort.push(array[m]);
        m++;
      }
    }

    currentSort.map(function(item,i) { array[left + i] = item; });
  }

}
