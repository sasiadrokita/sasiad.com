const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const sidebarRegex = /\{\/\* Glass Sidebar \(Collapsible\) \*\/\}/;
const replacement = `{/* Mobile Sidebar Overlay */}\n      {isSidebarOpen && (\n        <div \n          className="sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"\n          onClick={() => setIsSidebarOpen(false)}\n        />\n      )}\n\n      {/* Glass Sidebar (Collapsible) */}`;

code = code.replace(sidebarRegex, replacement);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
