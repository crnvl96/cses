const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
  const len = line.length;
  let currSeq = 1;
  let maxSeq = 0;

  line.split("").forEach((char, idx, arr) => {
    if (char === arr[idx + 1]) {
      currSeq += 1;
    } else {
      if (currSeq > maxSeq) {
        maxSeq = currSeq;
      }

      currSeq = 1;
    }
  });

  console.log(maxSeq);

  rl.close();
});
