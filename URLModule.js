import {URL} from 'url';

const myURL = new URL("https://www.example.com/api/v1/search?q=term_to_search");

console.log(myURL.hash)
console.log(myURL.hostname)
console.log(myURL.toJSON())
console.log(myURL.port)
console.log(myURL.href)
console.log(myURL.protocol)
console.log(myURL.searchParams)