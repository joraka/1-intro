// const replaceThisFunction = () => {};
// function doTest(_param, expected) {
//   const actual = replaceThisFunction(_param);
//   console.log({ v: _param, act: actual, exp: expected, rez: actual === expected });
// }

const replaceThisFunction = () => {};
function doTest(_param, expected) {
  const actual = replaceThisFunction(_param);
  process.stdout.write({ v: _param, act: actual, exp: expected, rez: actual === expected });
}
