function trim_str_split (str) {
	if (str == null) return str;
	return str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' ).split(' ').join('\n');
}

process.argv.splice(0, 2);
process.argv.forEach(function(val) {
	console.log(trim_str_split(val));
});
