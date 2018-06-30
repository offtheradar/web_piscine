if (process.argv.length == 3) {
    process.argv.splice(0, 2);
    var ops = process.argv[0];
    ops = ops.split('*') || ops.split('+');
    console.log(ops);
    ops[0] = Number(ops[0]);
    ops[1] = Number(ops[1]);
    if (NaN(ops[0]) || NaN(ops[1])) {
        console.log()
    }
    if (ops[1] == '+') {
        console.log(Number(ops[0]) + Number(ops[2]));
    } else if (ops[1] == '-') {
        console.log(Number(ops[0]) - Number(ops[2]));
    } else if (ops[1] == '*') {
        console.log(Number(ops[0]) * Number(ops[2]));
    } else if (ops[1] == '/') {
        console.log(Number(ops[0]) / Number(ops[2]));
    } else if (ops[1] == '%') {
        console.log(Number(ops[0]) % Number(ops[2]));
    } else {
        console.log("Syntax Error.");
    }
} else {
    console.log("Invalid number of arguments");
}