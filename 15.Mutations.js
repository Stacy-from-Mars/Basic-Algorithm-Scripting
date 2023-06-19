function mutation(arr) {
    return arr[1].toLowerCase().split("").every(el => arr[0].toLowerCase().indexOf(el) !== -1);
}

mutation(["hello", "hey"]);