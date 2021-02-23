const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log("Serialized URL : " + myUrl.href);
console.log("toString(): " + myUrl.toString());
console.log("toJSON: " + myUrl.toJSON());

// Host (root domain)
console.log(myUrl.hostname);

// Hostname (get port)
console.log(myUrl.host);

// Pathname
console.log(myUrl.pathname);

// Serialized query (after questionmark)
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param (Dynamic)
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(name + " : " + value);
})
