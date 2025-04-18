function knightMoves(start, end) {
  function determineBounds(newPostion, path, queue, visited) {
    if (
      newPostion[0] >= 0 &&
      newPostion[0] < 8 &&
      newPostion[1] >= 0 &&
      newPostion[1] < 8
    ) {
      const key = newPostion.toString();

      if (!visited.has(key)) {
        visited.add(key);
        queue.push([newPostion, [...path, newPostion]]);
      }
    }
  }

  function iterateMoves(possibleMoves, current, path, queue, visited) {
    for (const move of possibleMoves) {
      const newPostion = [current[0] + move[0], current[1] + move[1]];
      determineBounds(newPostion, path, queue, visited);
    }
  }

  const possibleMoves = [
    [1, 2],
    [2, 1],

    [2, -1],
    [1, -2],

    [-1, -2],
    [-2, -1],

    [-2, 1],
    [-1, 2],
  ];

  // Inititalize queue with [[currentPosisiton, [pathTakenSoFar]]]
  const queue = [[start, [start]]];
  const visited = new Set();

  while (queue.length > 0) {
    // Destructure the current sub array that is queue.shift() which returns the removed element [currentPosition, [pathTakenSoFar]]
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return `You made it in ${path.length - 1} moves! Here's your path: ${path
        .map((pos) => `[${pos}]`)
        .join(", ")}`;
    }

    iterateMoves(possibleMoves, current, path, queue, visited);
  }
}


console.log(knightMoves([0, 0], [6, 5]));
console.log(knightMoves([7, 1], [0, 1]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([3, 3], [4, 3]));
