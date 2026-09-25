const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const staticProfileRegex = /\{\/\* Static Profile Section \*\/\}([\s\S]*?)\{\/\* Interactive Terminal \*\/\}/;
const match = code.match(staticProfileRegex);

if (match) {
  let staticProfile = match[1];
  code = code.replace(match[0], '{/* Interactive Terminal */}');
  
  staticProfile = staticProfile.replace('className="p-6 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent"', 'className="border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent pb-6 mb-6 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-2"');
  staticProfile = staticProfile.replace('w-24 h-24 sm:w-32', 'w-20 h-20 sm:w-32');
  staticProfile = staticProfile.replace('text-3xl sm:text-5xl', 'text-2xl sm:text-5xl');
  
  code = code.replace('className="p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth"', 'className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth"');
  
  code = code.replace(/(\{\/\* Interactive Terminal \*\/\}\s*<div className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth">)/, "$1\n\n            {/* Static Profile Section */}" + staticProfile);

  fs.writeFileSync('src/App.jsx', code, 'utf8');
  console.log("Success");
} else {
  console.log("Failed to match");
}
