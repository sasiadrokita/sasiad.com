const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Replace Gallery
const galleryRegex = /<div className="grid grid-cols-3 gap-2 mb-4 opacity-70">[\s\S]*?<\/div>/;
const elfsightDiv = '<div className="elfsight-app-aead15a8-9500-4c43-afe4-38ec7cfc512c" data-elfsight-app-lazy></div>';
code = code.replace(galleryRegex, elfsightDiv);

// 2. Replace Media (Spotify -> YouTube)
const mediaRegex = /<iframe[\s\S]*?<\/iframe>/;
const youTubeDiv = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLIsOCqTbZxF0mgJsxbaulUHKBaWVT7X9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity"></iframe>`;
code = code.replace(mediaRegex, youTubeDiv);

const textReplace = /Road Trip Energy/;
code = code.replace(textReplace, "AHHHHH Playlist");

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
