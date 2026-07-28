const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
  const arr = Array.from({ length: line }, (_v, i) => i + 1);

  if (arr.length <= 3 && arr.length > 1) {
    console.log("NO SOLUTION");
  } else if (arr.length % 2 === 0) {
    const subLen = (arr.length - 2) / 2;
    const left = Array.from({ length: subLen }, (_v, i) => (i + 1) * 2);
    const right = Array.from({ length: subLen }, (_v, i) => (i + 1) * 2 + 1);
    const middle = [arr[arr.length - 1], arr[0]];
    console.log([...left, ...middle, ...right].join(" "));
  } else {
    const subLen = (arr.length - 1) / 2;
    const left = Array.from({ length: subLen }, (_v, i) => i * 2 + 1);
    const right = Array.from({ length: subLen }, (_v, i) => (i + 1) * 2);
    console.log([...left, arr[arr.length - 1], ...right].join(" "));
  }

  rl.close();
});
