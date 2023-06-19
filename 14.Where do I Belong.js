function getIndexToIns(arr, num) {
    let res = [...arr, num].sort((a, b) => a - b);
    return res.indexOf(num);
  }
  
getIndexToIns([5, 3, 20, 3], 5);