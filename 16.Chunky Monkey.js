function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size){
        newArr.push(arr.slice(i, size + i));
    }
    return newArr;
  }
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);