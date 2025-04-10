//https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript

// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

// Empty positions are marked ..
// Walls are marked W.
// Start and exit positions are empty in all test cases.

function pathFinder(maze){
    const rows = maze.split('\n').map(tileRow => tileRow.trim().split('').map(tile => tile !== 'W'))
    const visited = [];
    console.log(rows);
    return true;
  }

function testMaze(expected, maze) {
  const actual = pathFinder(maze);
  console.log({ v: maze, act: actual, exp: expected, rez: actual === expected });
}

// testMaze(
//   true,
//   `.W.
//     .W.
//     ...`
// );

// testMaze(
//   false,
//   `.W.
//     .W.
//     W..`
// );

testMaze(
  true,
  `......
    ......
    ......
    ......
    ......
    ......`
);

// testMaze(
//   false,
//   `......
//     ......
//     ......
//     ......
//     .....W
//     ....W.`
// );
