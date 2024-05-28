export default function appendToEachArrayValue(array, appendString) {
  var x= 0;
  for (var idx of array) {
    var value = idx;
    array[x] = appendString + value;
    x+=1; 
   }

  return array;
}