const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Job: Add email
code = code.replace(
  '<div className="text-gray-400">Location: Föhren, Deutschland</div>',
  '<div className="text-gray-400">Location: Föhren, Deutschland</div>\n              <div className="text-gray-400">Email: mateusz.nowak@endiso.de</div>'
);
// In case the encoding was weird (Fhren):
code = code.replace(
  /<div className="text-gray-400">Location: F[^<]+<\/div>/,
  '<div className="text-gray-400">Location: Föhren, Deutschland</div>\n              <div className="text-gray-400">Email: mateusz.nowak@endiso.de</div>'
);

// 2 & 3: Contact: Add phone number
code = code.replace(
  '<span className="text-gray-500">EMAIL:</span>',
  '<span className="text-gray-500">PHONE:</span> \n                  <a href="tel:+491711110639" className="hover:text-cachy-green transition-colors">+49 171 111 06 39</a>\n                </div>\n                <div className="flex items-center gap-3">\n                  <span className="text-gray-500">EMAIL:</span>'
);

// 4. Remove phone from top Profile and add second map pin
const oldTopPhone = /<span className="bg-black\/30 px-2 py-1\.5 sm:px-3 rounded-lg border border-white\/10 flex items-center gap-2 backdrop-blur-sm">\s*<Activity size=\{14\} className="text-cachy-cyan" \/> \+49 171 111 06 39\s*<\/span>/;
const newTopPin = `<span className="bg-black/30 px-2 py-1.5 sm:px-3 rounded-lg border border-white/10 flex items-center gap-2 backdrop-blur-sm">
                        <Map size={14} className="text-cachy-cyan" /> Slask, Polska
                      </span>`;
code = code.replace(oldTopPhone, newTopPin);

// 5. Translate Portfolio texts
const kiBotDE = /Vernetzter KI-Agent auf einem Edge-Device zur autonomen Verarbeitung von Marktdaten und Entscheidungsfindung\. Integration von LLMs f[a-zA-Z0-9_\-^\x00-\x7F]*r intelligente Systembenachrichtigungen\./;
const kiBotEN = "Networked AI agent on an edge device for autonomous processing of market data and decision-making. Integration of LLMs for intelligent system notifications.";
code = code.replace(kiBotDE, kiBotEN);

const pvServerDE = /Containerisierter Server auf einem Edge-Device zur Erfassung von Live-Telemetriedaten [a-zA-Z0-9_\-^\x00-\x7F]*ber Modbus RTU-Protokolle\. Validierung der Datenstr[a-zA-Z0-9_\-^\x00-\x7F]*me und Echtzeit-Visualisierung\./;
const pvServerEN = "Containerized server on an edge device for capturing live telemetry data via Modbus RTU protocols. Validation of data streams and real-time visualization.";
code = code.replace(pvServerDE, pvServerEN);

// 6. Media YouTube
const oldSpotify = /<iframe style={{ borderRadius: '12px' }} src="https:\/\/open\.spotify\.com\/embed\/playlist\/37i9dQZF1DXdyZkH3P5h0d\?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"><\/iframe>/;
const newYouTube = `<iframe width="100%" height="352" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ borderRadius: '12px' }}></iframe>`;
code = code.replace(oldSpotify, newYouTube);

// Also replace the description
code = code.replace("My favorite coding mix.", "My YouTube playlist.");

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
