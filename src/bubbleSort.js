export default function bubbleSort(array) {

  for ( var j = 0; j < array.length; j++ ) {
     // set the biggest one to the end of array
     for ( var i = 0, stop = array.length-j; i < stop; i++ ) {
       if ( array[i] > array[i+1] ) {
         swap(array, i, i+1);
      	}
     }
   }

   return array;

 function swap(array, index1, index2) {
   var temp = array[index1];
   array[index1] = array[index2];
   array[index2] = temp;
 }
}
