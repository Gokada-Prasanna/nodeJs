const queryString = require("querystring")
const url = require("url")

const urlPath = "https://example.com/search?q=node.js&page=1";

console.log(queryString.stringify(url.parse(urlPath, true).query))

// const querystring = require('querystring');
// const url = require('url')

// const adr = 'https://example.com/search?q=node.js&page=1';

// // Parse the query string from the URL
// const parsedQuery = querystring.parse(adr.split('?')[1]);

// console.log(url.parse(adr,true))

// console.log(parsedQuery);
// console.log(parsedQuery.q);    
// console.log(parsedQuery.page);
// const params = { q: 'javascript', page: '2' };
// const queryString = querystring.stringify(params);
// console.log(queryString);

