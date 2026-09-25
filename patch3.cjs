const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<motion\.div\s*initial=\{\{[\s\S]*?\}\}\s*animate=\{\{[\s\S]*?\}\}\s*onMouseEnter=\{\(\) => setIsSidebarOpen\(true\)\}\s*onMouseLeave=\{\(\) => setIsSidebarOpen\(false\)\}\s*className="[^"]*z-20[^"]*"/;

const newSidebar = `<div 
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={\`bg-black/90 sm:bg-black/30 backdrop-blur-xl border-r border-white/10 z-50 flex-col flex shrink-0 transition-all duration-300 absolute sm:relative h-full top-0 left-0 \${isSidebarOpen ? 'w-[240px] translate-x-0' : 'w-[64px] -translate-x-full sm:translate-x-0'}\`}`;

code = code.replace(regex, newSidebar);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
