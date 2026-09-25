const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

if (!code.includes('elfsightcdn.com')) {
  code = code.replace('</head>', '  <script src="https://elfsightcdn.com/platform.js" async></script>\n  </head>');
  fs.writeFileSync('index.html', code, 'utf8');
}
console.log("Success");
