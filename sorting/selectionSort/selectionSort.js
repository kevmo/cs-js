function swap(items, index1, index2){
  var item = items[index1];
  items[index1] = items[index2];
  items[index2] = item;
}

function selectionSort(items){
  var len = items.length,
  i, j, min;

  for (i = 0; i < len; i++){
    min = i
    for (j = i+1; j < len; j++){
      if (items[min] > items[j]){
        min = j;
        swap(items, i, min);
      }
    }
  }
  return items;
}