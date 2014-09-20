// returns an array of numbers sorted in ascending order

function swap (items, index1, index2){
  var item = items[index1];
  items[index1] = items[index2];
  items[index2] = item;
}

function bubbleSort(items){
  var len = items.length,
      i, j;

  for (i = 0; i < len; i++){
    for (j = 0; j < len; j++){
      if (items[j] > items[j+1]){
        swap(items, j, j+1);
      }
    }
  }

  return items;
}
