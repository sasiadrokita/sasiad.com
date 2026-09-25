const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add Menu import
code = code.replace(/import \{([^}]+)\} from 'lucide-react';/, "import {$1, Menu} from 'lucide-react';");

// 2. Fix root wrapper to fixed inset-0 and remove global onClick
code = code.replace(/<div className="h-\[100dvh\] w-full bg-black text-gray-200 font-sans relative overflow-hidden flex" onClick=\{\(\) => inputRef\.current\?\.focus\(\)\}>/, '<div className="fixed inset-0 w-full bg-black text-gray-200 font-sans overflow-hidden flex">');

// 3. Fix Sidebar
const oldSidebar = /<motion\.div[\s\S]*?className="flex absolute sm:relative h-full shrink-0 transition-all duration-300"[\s\S]*?>/;
const newSidebar = `<div 
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={\`bg-black/90 sm:bg-black/30 backdrop-blur-xl border-r border-white/10 z-50 flex-col flex shrink-0 transition-all duration-300 absolute sm:relative h-full top-0 left-0 \${isSidebarOpen ? 'w-[240px] translate-x-0' : 'w-[64px] -translate-x-full sm:translate-x-0'}\`}
      >`;
code = code.replace(oldSidebar, newSidebar);

// Also change closing </motion.div> for the sidebar to </div>
// Since there are multiple </motion.div>, we just change the first one after the sidebar text
const sidebarEndRegex = /(<div className="flex-1 py-4 overflow-x-hidden overflow-y-auto">[\s\S]*?)<\/motion\.div>/;
code = code.replace(sidebarEndRegex, "$1</div>");

// 4. Update Main Terminal Area padding
code = code.replace(/<div className="flex-1 flex flex-col relative z-10 p-2 sm:p-8 pl-\[72px\] sm:pl-8 max-w-6xl mx-auto w-full">/, '<div className="flex-1 flex flex-col relative z-10 p-2 sm:p-8 max-w-6xl mx-auto w-full pt-safe pb-safe">');

// 5. Add Hamburger Menu to Terminal Header
const oldHeader = /<div className="flex items-center gap-2 font-mono text-xs text-gray-400">\s*<TerminalIcon/;
const newHeader = `<div className="flex items-center gap-2 font-mono text-xs text-gray-400">
              <button onClick={(e) => { e.stopPropagation(); setIsSidebarOpen(!isSidebarOpen); }} className="sm:hidden p-1 mr-2 text-cachy-cyan hover:text-white bg-white/5 rounded">
                <Menu size={16} />
              </button>
              <TerminalIcon`;
code = code.replace(oldHeader, newHeader);

// 6. Add onClick to interactive terminal area so keyboard only opens when clicking the actual terminal part
const oldTerminalArea = /<div className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth">/;
const newTerminalArea = `<div className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth" onClick={() => inputRef.current?.focus()}>`;
code = code.replace(oldTerminalArea, newTerminalArea);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
