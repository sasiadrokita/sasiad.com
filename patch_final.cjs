const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Fix Föhren
code = code.replace(/Location: F\S*hren, Deutschland/g, 'Location: Föhren, Deutschland');

// 2. Translate KI-Trading-Bot
const kiGerman = /Vernetzter KI-Agent auf einem Edge-Device zur autonomen Verarbeitung von Marktdaten und Entscheidungsfindung\.\s*Integration von LLMs f\S+r intelligente Systembenachrichtigungen\./;
const kiEnglish = "Networked AI agent on an edge device for autonomous processing of market data and decision-making. Integration of LLMs for intelligent system notifications.";
code = code.replace(kiGerman, kiEnglish);

// 3. Translate PV-Monitoring-Server
const pvGerman = /Containerisierter Server auf einem Edge-Device zur Erfassung von Live-Telemetriedaten \S+ber Modbus RTU-Protokolle\.\s*Validierung der Datenstr\S+me und Echtzeit-Visualisierung\./;
const pvEnglish = "Containerized server on an edge device for capturing live telemetry data via Modbus RTU protocols. Validation of data streams and real-time visualization.";
code = code.replace(pvGerman, pvEnglish);

// 4. Move IT & Digital Networking
const interestsRegex = /(<div>Travel [^<]+<\/div>\s*<div>Crypto & Trading [^<]+<\/div>\s*)(<div className="text-cachy-cyan font-bold mt-1">[^<]+IT & Digital Networking<\/div>)/;
code = code.replace(interestsRegex, "$2\n                    $1");

// 5. Replace phone with Slask pin
const phoneRegex = /<Activity size=\{14\} className="text-cachy-cyan" \/> \+49 171 111 06 39/;
const slaskPin = '<Map size={14} className="text-cachy-cyan" /> Slask, Polska';
code = code.replace(phoneRegex, slaskPin);

fs.writeFileSync('src/App.jsx', code, 'utf8');
console.log("Success");
