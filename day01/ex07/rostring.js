function trim_str (str) {
	if (str == null) return str;
	return str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' );
}

var lst = process.argv[2];

if (lst) {
	lst = trim_str(lst).split(' ');
	if (lst[0]) {
		var tmp = lst[0];
		lst.shift();
		lst.push(tmp);
	}
	lst.forEach(function (value) {
		console.log(value);
	});
}

