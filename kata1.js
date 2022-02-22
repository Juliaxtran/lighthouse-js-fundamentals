function conditionalSum(arr, cond) {
  var total_length = arr.length;
  var total_num = 0;
  if (total_length === 0) {
    return 0;
  }
  if (cond === 'even') {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        total_num += arr[i];
      }
    }
  }
  if (cond == 'odd') {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        total_num += arr[i];
      }
    }
  }

  return total_num;
}

