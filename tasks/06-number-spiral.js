const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  lines.shift();
  const positions = lines.map((line) => line.split(" ").map((el) => +el));

  let res = "";

  for (const position of positions) {
    const maxVal = Math.max(position[0], position[1]);
    const minVal = Math.min(position[0], position[1]);
    const delta = maxVal - minVal;

    const idx = position[0] > position[1] ? 0 : 1;
    const el = maxVal ** 2 - maxVal + 1;

    if (maxVal % 2 === 0) {
      if (idx === 0) {
        res += `${el + delta}\n`;
      } else {
        res += `${el - delta}\n`;
      }
    } else {
      if (idx === 0) {
        res += `${el - delta}\n`;
      } else {
        res += `${el + delta}\n`;
      }
    }
  }

  console.log(res);
});
