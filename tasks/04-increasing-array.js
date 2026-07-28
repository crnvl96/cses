const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  const items = lines[1].split(" ").map((el) => +el);

  let max = items[0];

  const steps = items.reduce((acc, curr, idx, items) => {
    const next = items[idx + 1];

    if (!next) {
      return acc;
    }

    const diff = max - next;

    if (diff > 0) {
      acc += diff;
    } else {
      max = next;
    }

    return acc;
  }, 0);

  console.log(steps);
});
