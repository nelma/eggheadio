/**
 * 
 * Mike Sherov
 */


const scoresDyDay = [
  [100, 99, 98],
  [97, 96, 95],
  [94, 93, 92]
];

function average(arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;
}

const scores = scoresDyDay.reduce((scores, current) => scores.concat(current), []);
console.log(average(scores));

//array.prototype.flat - node 11.0.0
console.log(average(scoresDyDay.flat()));