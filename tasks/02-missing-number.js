const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  let lastElement = +lines[0];
  const elements = lines[1].split(" ").map((el) => +el);

  let expectedSum = 0;
  while (lastElement > 0) {
    expectedSum += lastElement;
    lastElement -= 1;
  }

  const actualSum = elements.reduce((acc, curr) => acc + curr, 0);

  console.log(expectedSum - actualSum);
});
