function trim_str_split (str) {
	if (str == null) return str;
	return str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' ).split(' ');
}

process.argv.splice(0, 2);
var sents = process.argv;
var some = [];
sents.forEach(function(val) {
	some.push(trim_str_split(val));
});
some = [].concat.apply([], some).sort();
some.forEach(function(val) {
	console.log(val);
});