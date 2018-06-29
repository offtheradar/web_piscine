function trim_str (str) {
	if (str == null) return str;
	return str.replace(/\s+$/g, '').replace(/^\s+/g, '').replace( / +/g, ' ' ).split(' ');
}

var i = 0;
var all_words = process.argv;

for (var i = 2; i < all_words.length; i++) {
	console.log(trim_str(all_words[i]));
}
