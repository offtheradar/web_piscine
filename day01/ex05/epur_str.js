if (process.argv[2]) {
    var str = process.argv[2];
    str = str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' );
    console.log(str);
} else {
    console.log("Enter a single string argument.")
}