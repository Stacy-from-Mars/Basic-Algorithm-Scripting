function repeatStringNumTimes(str, num) {
    let repeat = ''
    for (let i = 0; i < num; i++) {
        repeat += str;
    }
    return repeat;
  }
  
  repeatStringNumTimes("abc", 3);