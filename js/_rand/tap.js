// https://www.codewars.com/kata/54a2e93b22d236498400134b

{
  function presses(phrase) {
    const clickingMap = Object.fromEntries(
      [
        [1, "1ADGJMPTW *#"],
        [2, "BEHKNQUX0"],
        [3, "CFILORVY"],
        [4, "SZ234568"],
        [5, "79"],
      ]
        .map(([count, arr]) => arr.split("").map((letter) => [letter, count]))
        .flat()
    );

    return phrase
      .toUpperCase()
      .split("")
      .reduce(
        (acc, letter) => (acc += clickingMap.hasOwnProperty(letter) ? clickingMap[letter] : 0),
        0
      );
  }

  console.log("With object");
  const timeStart = Date.now();
  presses("bob".repeat(10000000));
  console.log("time -> " + (Date.now() - timeStart));
}

{
  function presses(phrase) {
    const cMap = new Map(
      [
        [1, "1ADGJMPTW *#"],
        [2, "BEHKNQUX0"],
        [3, "CFILORVY"],
        [4, "SZ234568"],
        [5, "79"],
      ]
        .map(([count, arr]) => arr.split("").map((letter) => [letter, count]))
        .flat()
    );

    return phrase
      .toUpperCase()
      .split("")
      .reduce((acc, letter) => (acc += cMap.has(letter) ? cMap.get(letter) : 0), 0);
  }

  console.log("With map");
  const timeStart = Date.now();
  presses("bob".repeat(10000000));
  console.log("time -> " + (Date.now() - timeStart));
}
