const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

code = code.replace(/import \{([^}]+)\} from 'lucide-react';/, "import {$1, Phone, Globe} from 'lucide-react';");

code = code.replace(/Location: F[^\w]*hren/g, "Location: F\u00f6hren");

code = code.replace(/Slask, Poland/g, "\u015al\u0105sk, Poland");
code = code.replace(/>\s*[^<]*Slask[^<]*</g, "> \u015al\u0105sk, Poland <");

const contactRegex = /case 'contact':[\s\S]*?break;/;
const newContact = `case 'contact':
          newHistory.push({ type: 'output', content: (
            <div className="bg-black/40 p-5 rounded border border-cachy-border backdrop-blur-md inline-block">
              <div className="flex flex-col gap-4 font-mono text-cachy-cyan">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-500 shrink-0" /> 
                  <a href="tel:+491711110639" className="hover:text-cachy-green transition-colors">+49 171 111 06 39</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-500 shrink-0" /> 
                  <a href="mailto:mateusz.nowak.zabrze@gmail.com" className="hover:text-cachy-green transition-colors">mateusz.nowak.zabrze@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-gray-500 shrink-0" /> 
                  <a href="https://sasiad.de" target="_blank" rel="noreferrer" className="hover:text-cachy-green transition-colors">sasiad.de</a>
                </div>
              </div>
            </div>
          )});
          break;`;
code = code.replace(contactRegex, newContact);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
