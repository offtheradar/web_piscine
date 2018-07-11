var request = require('request');
var url = process.argv[2];
const cheerio = require('cheerio')
var content = undefined;
request(url, (error, res, body) => {
    if (!error) {
        parse_html(body);
    } else {
        console.log(error);
    }
});

function    parse_html(body) {
    content += body;
    const $ = cheerio.load(content);

    var img_src = [];
    $('img').each((i, elem) => {
        console.log(elem.src);
        img_src[i] = $(this).attr('src');
    });
    print_to_sc(img_src);
    
}

function    print_to_sc(img) {
    console.log(img);
}