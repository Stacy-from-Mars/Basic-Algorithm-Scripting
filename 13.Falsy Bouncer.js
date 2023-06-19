function bouncer(arr) {
    return arr.filter(el => typeof el != "boolean" && el); //arr.filter(Boolean)
  }
  
  bouncer([7, "ate", "", false, 9]);