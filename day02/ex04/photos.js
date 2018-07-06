const scrape = require('website-scraper');
const rp = require('request-promise');
const cheerio = require('cheerio');
const path = require('path');
var path_name = process.argv[2];
var options = {
    uri: ['https://codeburst.io'],
    transform: function (body) {
        return cheerio.load(body);
      }
};
rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });