const colors = ["orange","red", "green", "blue", "yellow", "red", "orange", "orange"];
console.log(colors);
// rasti, visas spalvas, kurios kartojasi
// rasti, visas spalvas, kurios yra unikalios

// ['red', 'green', 'blue', 'yellow', 'gray', 'red', 'orange'];
const colorRepeat = colors.filter(
  (color, index, list) =>
    // list.indexOf(color) !== list.lastIndexOf(color)
    list.indexOf(color) < 1
);
console.log("----");
console.log("colorRepeat", colorRepeat);

//-----------

const colorRepeat2 = colors.filter((color, index, list) => list.indexOf(color, index + 1) + 1);
// const colorRepeat2 = colors.map((color, index, list) => [
//   list.indexOf(color),
//   list.lastIndexOf(color),
// ]);
console.log("----");
console.log("colorRepeat2", colorRepeat2);

///-----------

const colorRepeatFilter = colors.filter(
  (color, index, list) => list.filter((c) => c === color).length > 1
);
console.log("----");
console.log("colorRepeatFilter", colorRepeatFilter);

const colorNonRepeatFilter = colors.filter(
  (color, index, list) => list.filter((c) => c === color).length === 1
);
console.log("----");
console.log("colorNonRepeatFilter", colorNonRepeatFilter);
