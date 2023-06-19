function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    return arr.map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));