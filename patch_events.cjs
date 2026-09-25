const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /onMouseEnter=\{\(\) => setIsSidebarOpen\(true\)\}\s*onMouseLeave=\{\(\) => setIsSidebarOpen\(false\)\}/;
const replacement = "onMouseEnter={() => window.innerWidth >= 640 && setIsSidebarOpen(true)}\n          onMouseLeave={() => window.innerWidth >= 640 && setIsSidebarOpen(false)}";

code = code.replace(regex, replacement);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
