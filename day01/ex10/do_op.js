if (process.argv.length == 5) {
    process.argv.splice(0, 2);
    var ops = process.argv;
    if (ops[1] == '+') {
        console.log(Number(ops[0]) + Number(ops[2]));
    } else if (ops[1] == '-') {
        console.log(Number(ops[0]) - Number(ops[2]));
    } else if (ops[1] == '*') {
        console.log(Number(ops[0]) * Number(ops[2]));
    } else if (ops[1] == '/') {
        console.log(Number(ops[0]) / Number(ops[2]));
    }
} else {
    console.log("Invalid number of arguments");
}