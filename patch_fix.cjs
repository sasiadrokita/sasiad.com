const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<div className="elfsight-app-aead15a8-9500-4c43-afe4-38ec7cfc512c" data-elfsight-app-lazy><\/div>\s*<div className="bg-white\/10 aspect-square rounded flex items-center justify-center"><ImageIcon size=\{24\} className="text-white\/30" \/><\/div>\s*<div className="bg-white\/10 aspect-square rounded flex items-center justify-center"><ImageIcon size=\{24\} className="text-white\/30" \/><\/div>\s*<\/div>/;

code = code.replace(regex, '<div className="elfsight-app-aead15a8-9500-4c43-afe4-38ec7cfc512c" data-elfsight-app-lazy></div>');

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
