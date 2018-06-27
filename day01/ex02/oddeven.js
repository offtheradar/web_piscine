const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
    if (isNaN(answer)) {
        console.log(answer, "is not a number");
    }
    else if (answer % 2 == 0) {
        console.log("The number", answer, "is even");
    }
    else if (answer % 2 != 0) {
        console.log("The number", answer, "is odd");
    }
    rl.close();
});
