const rl = require("readline").createInterface({ input: process.stdin })

rl.on("line", line => {
    let n = parseInt(line)
    const out = []

    function applyStep(n) {
        if (n % 2 === 0) {
            return n / 2
        }

        return n * 3 + 1
    }

    function applyProcess(n) {
        out.push(n)

        if (n === 1) {
            return out.join(" ")
        }

        return applyProcess(applyStep(n))
    }

    console.log(applyProcess(n))
    rl.close()
})
