import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Wallet, Activity, Map, Cpu, Image as ImageIcon, Briefcase, User, Hash, Mail, Music, Building, FolderGit2 , Menu} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const bgVideo = "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/tlo.mp4";
const qrUrl = "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/QR.png";
const galleryImages = [
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/11.jpg",
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/12.jpg",
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/13.jpg",
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/14.jpg",
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/sport2.webp",
  "https://raw.githubusercontent.com/sasiadrokita/mateusz-web/main/food1.webp"
];

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isTypingMacro, setIsTypingMacro] = useState(false);
  const [initText, setInitText] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const fullInitText = "Initializing Terminal... Welcome to my site.";

  // Initial animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullInitText.length) {
        setInitText(fullInitText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setHistory([
          { type: 'system', content: 'Type "help" to see available commands or click the sidebar links.' }
        ]);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, initText]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'command', content: `root@mateusz:~$ ${cmd}` }];

    switch (cmd) {
      case 'help':
      case '--help':
        newHistory.push({ type: 'output', content: (
          <div className="text-cachy-cyan space-y-1">
            <div><strong className="text-cachy-green">help</strong>       - Show this help message</div>
            <div><strong className="text-cachy-green">about</strong>      - Show information about me</div>
            <div><strong className="text-cachy-green">contact</strong>    - Display contact information</div>
            <div><strong className="text-cachy-green">job</strong>        - Current professional role</div>
            <div><strong className="text-cachy-green">skills</strong>     - Display technical capabilities</div>
            <div><strong className="text-cachy-green">system</strong>     - System hardware & OS information</div>
            <div><strong className="text-cachy-green">social media</strong> - Display my social media links</div>
            <div><strong className="text-cachy-green">wallet</strong>     - Show Web3 wallet and QR code</div>
            <div><strong className="text-cachy-green">gallery</strong>    - Instagram feed & visuals</div>
            <div><strong className="text-cachy-green">media</strong>      - Audio / Video streams</div>
            <div><strong className="text-cachy-green">portfolio</strong>  - Display professional projects</div>
            <div><strong className="text-cachy-green">clear</strong>      - Clear the terminal screen</div>
          </div>
        )});
        break;
      case 'about':
      case 'whoami':
        newHistory.push({ type: 'output', content: (
          <div className="text-gray-300 space-y-2 max-w-2xl bg-black/30 p-4 rounded border border-white/5">
            <p className="font-bold text-white mb-2">IT-System & Network Specialist (Digitale Vernetzung)</p>
            <p>Highly competent specialist experienced in planning, deploying, and operating complex network infrastructures. I focus on the efficient integration and networking of software with cyber-physical systems and edge devices.</p>
          </div>
        )});
        break;
      case 'job':
        newHistory.push({ type: 'output', content: (
          <div className="text-gray-300 space-y-2 max-w-2xl bg-black/40 p-4 rounded border border-cachy-cyan backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Briefcase size={20} className="text-cachy-cyan" /> Current Assignment</h3>
            <div className="text-cachy-green font-bold">Company: endiso GmbH</div>
            <div className="text-gray-400">Location: F�hren, Deutschland</div>
              <div className="text-gray-400">Email: mateusz.nowak@endiso.de</div>
            <div className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed">
              <strong>Roles:</strong> IT Head, Technician, Support, endisoKicker Admin, Warehouse Manager.
              <div className="italic text-gray-500 mt-1">(Guinea pig - Experimental Division)</div>
            </div>
          </div>
        )});
        break;
      case 'contact':
        newHistory.push({ type: 'output', content: (
          <div className="bg-black/40 p-4 rounded border border-cachy-border backdrop-blur-md inline-block">
            <h3 className="text-lg font-bold text-white mb-3">Communication Channels</h3>
            <div className="flex flex-col gap-3 font-mono text-cachy-cyan">
              <div className="flex items-center gap-3">
                <span className="text-gray-500">PHONE:</span> 
                  <a href="tel:+491711110639" className="hover:text-cachy-green transition-colors">+49 171 111 06 39</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">EMAIL:</span> 
                <a href="mailto:mateusz.nowak.zabrze@gmail.com" className="hover:text-cachy-green transition-colors">mateusz.nowak.zabrze@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">WEB:</span> 
                <a href="https://sasiad.de" target="_blank" rel="noreferrer" className="hover:text-cachy-green transition-colors">sasiad.de</a>
              </div>
            </div>
          </div>
        )});
        break;
      case 'socials':
      case 'social media':
        newHistory.push({ type: 'output', content: (
          <div className="flex flex-wrap gap-4 text-cachy-cyan">
            <a href="https://github.com/sasiadrokita/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors p-2 bg-black/40 rounded border border-white/10 hover:border-cachy-cyan backdrop-blur-md">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://x.com/sasiadrokita" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors p-2 bg-black/40 rounded border border-white/10 hover:border-cachy-cyan backdrop-blur-md">
              <FaXTwitter size={20} /> X
            </a>
            <a href="https://www.facebook.com/mateusz.nowak.zabrze" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors p-2 bg-black/40 rounded border border-white/10 hover:border-cachy-cyan backdrop-blur-md">
              <FaFacebook size={20} /> Facebook
            </a>
            <a href="https://www.instagram.com/mateusz.nowak.zabrze" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors p-2 bg-black/40 rounded border border-white/10 hover:border-cachy-cyan backdrop-blur-md">
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        )});
        break;
      case 'wallet':
        newHistory.push({ type: 'output', content: (
          <div className="bg-black/50 backdrop-blur-md border border-cachy-border p-4 rounded-lg inline-block">
            <div className="flex items-center gap-2 text-cachy-green mb-3 font-bold">
              <Wallet size={18} /> Ethereum Wallet
            </div>
            <div className="font-mono text-cachy-cyan text-sm mb-4 bg-black/80 p-2 rounded">
              0xd259D3F1695140732982B9d93A82B2DE4C9E7bD3
            </div>
            <img src={qrUrl} alt="QR Code" className="w-32 h-32 rounded bg-white p-2" />
          </div>
        )});
        break;
      case 'gallery':
        newHistory.push({ type: 'output', content: (
          <div className="bg-black/50 p-4 rounded border border-white/10 max-w-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><FaInstagram className="text-pink-500" /> Instagram Feed</h3>
            <p className="text-gray-400 text-sm mb-4">Photos have been moved to Instagram. Check out the latest updates there!</p>
            <div className="elfsight-app-aead15a8-9500-4c43-afe4-38ec7cfc512c" data-elfsight-app-lazy></div>
            <a href="https://www.instagram.com/mateusz.nowak.zabrze" target="_blank" rel="noreferrer" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-all">
              @mateusz.nowak.zabrze
            </a>
          </div>
        )});
        break;
      case 'media':
        newHistory.push({ type: 'output', content: (
          <div className="bg-black/50 p-4 rounded border border-white/10 max-w-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-3">AHHHHH Playlist</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLIsOCqTbZxF0mgJsxbaulUHKBaWVT7X9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity"></iframe>
          </div>
        )});
        break;
      case 'portfolio':
        newHistory.push({ type: 'output', content: (
          <div className="font-sans text-gray-300 max-w-4xl bg-black/40 p-4 rounded border border-cachy-border backdrop-blur-md flex flex-col gap-6">
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Cpu size={20} className="text-cachy-cyan" /> KI-Trading-Bot</h3>
              <p className="mb-2 text-sm">
                Vernetzter KI-Agent auf einem Edge-Device zur autonomen Verarbeitung von Marktdaten und Entscheidungsfindung. Integration von LLMs für intelligente Systembenachrichtigungen.
              </p>
              <div className="flex gap-2 font-mono text-xs text-cachy-green">
                <span className="bg-cachy-green/10 px-2 py-1 rounded border border-cachy-green/30">Raspberry Pi</span>
                <span className="bg-cachy-green/10 px-2 py-1 rounded border border-cachy-green/30">Python</span>
                <span className="bg-cachy-green/10 px-2 py-1 rounded border border-cachy-green/30">Gemini API</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Activity size={20} className="text-yellow-500" /> PV-Monitoring-Server</h3>
              <p className="mb-2 text-sm">
                Containerisierter Server auf einem Edge-Device zur Erfassung von Live-Telemetriedaten über Modbus RTU-Protokolle. Validierung der Datenströme und Echtzeit-Visualisierung.
              </p>
              <div className="flex gap-2 font-mono text-xs text-yellow-500">
                <span className="bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/30">Modbus RTU</span>
                <span className="bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/30">Docker</span>
                <span className="bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/30">Grafana</span>
              </div>
            </div>

          </div>
        )});
        break;
      case 'skills':
        newHistory.push({ type: 'output', content: (
          <div className="font-mono text-sm max-w-2xl bg-black/50 p-4 rounded border border-cachy-border">
            <h3 className="text-cachy-cyan font-bold mb-4 border-b border-cachy-border pb-2 uppercase tracking-widest">Tech Stack & Capabilities</h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-300 font-bold block mb-1">Systems & Edge:</span>
                <span className="text-cachy-green bg-cachy-green/10 px-2 py-1 rounded inline-block border border-cachy-green/20">Arch Linux (CachyOS), Raspberry Pi, Windows Client & Server</span>
              </div>
              <div>
                <span className="text-gray-300 font-bold block mb-1">Code & Frameworks:</span>
                <span className="text-cachy-green bg-cachy-green/10 px-2 py-1 rounded inline-block border border-cachy-green/20">Python, C++, Java, Tailwind CSS, LaTeX, Flux</span>
              </div>
              <div>
                <span className="text-gray-300 font-bold block mb-1">Cloud & AI:</span>
                <span className="text-cachy-green bg-cachy-green/10 px-2 py-1 rounded inline-block border border-cachy-green/20">Google Cloud, AI Agents, IPFS, Blockchain</span>
              </div>
              <div>
                <span className="text-gray-300 font-bold block mb-1">Ops & Admin:</span>
                <span className="text-cachy-green bg-cachy-green/10 px-2 py-1 rounded inline-block border border-cachy-green/20">Azure AD, M365, Docker, Grafana, SQLite, Routing/Switching</span>
              </div>
            </div>
          </div>
        )});
        break;
      case 'system':
      case 'neofetch':
        newHistory.push({ type: 'output', content: (
          <div className="flex flex-col sm:flex-row gap-6 font-mono text-sm">
            <div className="text-cachy-green font-bold whitespace-pre leading-tight">
{`    ////^\\\\\\
    | ^   ^ |
   @ (o) (o) @
    |   <   |
    |  ___  |
     \\_____/`}
            </div>
            <div>
              <div className="text-cachy-cyan font-bold">@mateusznowak</div>
              <div className="text-gray-500">-----------------</div>
              <div><strong className="text-cachy-green">OS:</strong> Human v37.0.1</div>
              <div><strong className="text-cachy-green">Host:</strong> Carbon-based Lifeform</div>
              <div><strong className="text-cachy-green">Kernel:</strong> Saarland Region</div>
              <div><strong className="text-cachy-green">Uptime:</strong> 37 years, 9 months</div>
              <div><strong className="text-cachy-green">Packages:</strong> Triathlete, Traveller</div>
              <div><strong className="text-cachy-green">Fuel:</strong> Coffee, Crypto, Books, Swimpool, Sauna</div>
            </div>
          </div>
        )});
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        if (cmd.startsWith('sudo ')) {
          newHistory.push({ type: 'error', content: 'mateusz is not in the sudoers file. This incident will be reported.' });
        } else {
          newHistory.push({ type: 'error', content: `command not found: ${cmd}` });
        }
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isTypingMacro) {
      const cmd = input;
      setInput('');
      if (cmd) executeCommand(cmd);
    }
  };

  const runMacro = (cmd) => { setIsSidebarOpen(false);
    if (isTypingMacro) return;
    setIsTypingMacro(true);
    setInput('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      setInput(cmd.slice(0, i + 1));
      i++;
      if (i >= cmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setInput('');
          executeCommand(cmd);
          setIsTypingMacro(false);
        }, 300);
      }
    }, 50);
  };

  return (
    <div className="fixed inset-0 w-full bg-black text-gray-200 font-sans overflow-hidden flex">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 z-0 pointer-events-none mix-blend-screen"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Glass Sidebar (Collapsible) */}
      <div 
        onMouseEnter={() => window.innerWidth >= 640 && setIsSidebarOpen(true)}
          onMouseLeave={() => window.innerWidth >= 640 && setIsSidebarOpen(false)}
        className={`bg-black/90 sm:bg-black/30 backdrop-blur-xl border-r border-white/10 z-50 flex-col flex shrink-0 transition-all duration-300 absolute sm:relative h-full top-0 left-0 ${isSidebarOpen ? 'w-[240px] translate-x-0' : 'w-[64px] -translate-x-full sm:translate-x-0'}`}
      >
        <div className="p-4 border-b border-white/10 flex items-center h-[73px]">
          <Cpu size={28} className="text-cachy-cyan drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] shrink-0 ml-1" />
          <span className={`ml-4 font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cachy-cyan to-cachy-green whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
            MATEUSZ NOWAK
          </span>
        </div>
        <div className="flex-1 py-4 overflow-x-hidden overflow-y-auto">
          <div className={`text-xs font-mono text-gray-500 mb-4 px-4 uppercase tracking-widest whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
            Execute Macro
          </div>
          
          <button onClick={() => runMacro('about')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-green hover:bg-white/5 transition-all group overflow-hidden">
            <User size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_var(--color-cachy-green-glow)] text-cachy-green/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>about</span>
          </button>
          
          <button onClick={() => runMacro('job')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-cyan hover:bg-white/5 transition-all group overflow-hidden">
            <Building size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] text-cachy-cyan/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_job</span>
          </button>

          <button onClick={() => runMacro('portfolio')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-cyan hover:bg-white/5 transition-all group overflow-hidden">
            <FolderGit2 size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] text-cachy-cyan/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_portfolio</span>
          </button>

          <button onClick={() => runMacro('gallery')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-green hover:bg-white/5 transition-all group overflow-hidden">
            <ImageIcon size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_var(--color-cachy-green-glow)] text-cachy-green/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_gallery</span>
          </button>
          
          <button onClick={() => runMacro('media')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-green hover:bg-white/5 transition-all group overflow-hidden">
            <Music size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_var(--color-cachy-green-glow)] text-cachy-green/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_media</span>
          </button>

          <button onClick={() => runMacro('wallet')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-cyan hover:bg-white/5 transition-all group overflow-hidden">
            <Wallet size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] text-cachy-cyan/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_wallet</span>
          </button>

          <button onClick={() => runMacro('social media')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-green hover:bg-white/5 transition-all group overflow-hidden">
            <Hash size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_var(--color-cachy-green-glow)] text-cachy-green/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>my_socials</span>
          </button>
          
          <button onClick={() => runMacro('contact')} className="w-full flex items-center px-5 py-3 text-left text-gray-300 hover:text-cachy-cyan hover:bg-white/5 transition-all group overflow-hidden mt-4 border-t border-white/5 pt-4">
            <Mail size={20} className="shrink-0 group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] text-cachy-cyan/70" /> 
            <span className={`ml-4 font-mono text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>contact</span>
          </button>
        </div>
      </div>

      {/* Main Terminal Area */}
      <div className="flex-1 flex flex-col relative z-10 p-2 sm:p-8 max-w-6xl mx-auto w-full pt-safe pb-safe">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col flex-1"
        >
          {/* Terminal Header Bar */}
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
              <button onClick={(e) => { e.stopPropagation(); setIsSidebarOpen(!isSidebarOpen); }} className="sm:hidden p-1 mr-2 text-cachy-cyan hover:text-white bg-white/5 rounded">
                <Menu size={16} />
              </button>
              <TerminalIcon size={14} className="text-cachy-green" /> root@mateusz-network: ~
            </div>
          </div>
          
          {/* Interactive Terminal */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-sm sm:text-base scroll-smooth" onClick={() => inputRef.current?.focus()}>

            {/* Static Profile Section */}
          <div className="border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent pb-6 mb-6 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative group shrink-0">
                <div className="absolute inset-0 bg-cachy-cyan rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src="/avatar.png" 
                  alt="Mateusz Nowak" 
                  className="w-20 h-20 sm:w-32 sm:h-32 rounded-xl border-2 border-cachy-cyan/50 p-1 relative z-10 object-cover shadow-2xl" 
                />
              </div>
              <div className="text-center sm:text-left mt-2 sm:mt-0 flex-1">
                <h2 className="text-2xl sm:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cachy-green to-cachy-cyan tracking-tighter drop-shadow-[0_0_10px_rgba(46,160,67,0.5)] uppercase mb-2">
                  Mateusz Nowak
                </h2>
                <div className="text-gray-300 font-mono text-xs sm:text-sm tracking-wider mb-4 leading-relaxed">
                  <div>Travel ✈️ • Swim 🏊‍♂️ • Tech 💻</div>
                  <div>Crypto & Trading 📈 • Books 📚</div>
                  <div className="text-cachy-cyan font-bold mt-1">🌐 IT & Digital Networking</div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 font-sans text-sm text-gray-300">
                  <span className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 backdrop-blur-sm">
                    <Activity size={14} className="text-cachy-cyan" /> +49 171 111 06 39
                  </span>
                  <span className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 backdrop-blur-sm">
                    <Map size={14} className="text-cachy-cyan" /> Saarland, Germany
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          
            
            <div className="mb-6 text-cachy-cyan drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">
              <span className="text-cachy-green mr-2">▶</span> 
              {initText}
              {initText.length < fullInitText.length && (
                <span className="animate-pulse inline-block w-2 h-4 bg-cachy-green ml-1 align-middle"></span>
              )}
            </div>

            <div className="space-y-4 mb-4">
              {history.map((entry, i) => (
                <div key={i} className={`
                  ${entry.type === 'system' ? 'text-gray-500' : ''}
                  ${entry.type === 'command' ? 'text-gray-300 mt-6' : ''}
                  ${entry.type === 'output' ? 'text-gray-200 mt-2' : ''}
                  ${entry.type === 'error' ? 'text-red-400 mt-2' : ''}
                `}>
                  {entry.content}
                </div>
              ))}
            </div>

            {/* Input Line */}
            {initText.length === fullInitText.length && (
              <div className="flex items-center gap-2 mt-4">
                <span className="text-cachy-green drop-shadow-[0_0_5px_var(--color-cachy-green-glow)] whitespace-nowrap">root@mateusz:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => !isTypingMacro && setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none flex-1 text-gray-200 placeholder-gray-700 w-full"
                  placeholder={isTypingMacro ? "" : "type 'help' or click a sidebar link..."}
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                  readOnly={isTypingMacro}
                />
              </div>
            )}
            <div ref={bottomRef} className="h-4"></div>
          </div>

        </motion.div>
      </div>

      {/* Fullscreen Image Modal for Gallery */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Fullscreen" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_40px_var(--color-cachy-cyan)] border border-cachy-cyan/30" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
