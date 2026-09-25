const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

code = code.replace(/Slask, Polska/g, "Slask, Poland");
code = code.replace(/Slask, Polska/g, "Slask, Poland");

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
