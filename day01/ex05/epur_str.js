function trim_str (str) {
	if (str == null) return str;
	return str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' );
}

var str = process.argv[2];

console.log(trim_str(str));
