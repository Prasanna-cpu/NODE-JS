import path from "path";

console.log(path.basename("C:\\node.js\\index.js"))//Returns last portion
console.log(path.basename("C:\\node.js\\app.js",".js")); 


console.log(path.dirname("C:\\node.js\\index.js"));

console.log(path.extname("C:\\node.js\\index.js"));

console.log(path.join("C:\\","courses","django"))
console.log(path.join("C:\\", "courses", "django",".."));


console.log(path.normalize("C:\\courses\\react js\\react-hooks"));

console.log(path.parse("C:\\courses\\react js\\react-hooks"));

console.log(path.parse("C:\\courses\\react js\\react-hooks").base);
console.log(path.parse("C:\\courses\\react js\\react-hooks").root);