import React, { useState, useEffect } from "react";
import {
  Terminal,
  Code,
  Zap,
  Github,
  Skull,
  Coffee,
  Wifi,
  HardDrive,
  MessageCircle,
  Home,
  User,
  FileText,
  ExternalLink,
  Palette,
} from "lucide-react";
import { projects } from "./data/projects";


function App() {
  const [glitchText, setGlitchText] = useState("BRAT");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [terminalLines, setTerminalLines] = useState([
    { text: "$ whoami", typed: false },
    { text: "brat_user", typed: false },
    { text: "$ cat /etc/motd", typed: false },
    {
      text: "Welcome to BRAT - where good code goes to die",
      typed: false,
      indent: true,
    },
    {
      text: "Last login: Never (we don't track you)",
      typed: false,
      indent: true,
    },
    { text: "System load: Over 9000", typed: false, indent: true },
    { text: "$ ls -la /fucks/given", typed: false },
    {
      text: "ls: cannot access '/fucks/given': No such file or directory",
      typed: false,
    },
    { text: "$ sudo make me_a_sandwich", typed: false },
    { text: "What? Make it yourself.", typed: false },
  ]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTerminalHovered, setIsTerminalHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  // Mouse tracking for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const glitchChars = [
        "B",
        "R",
        "A",
        "T",
        "8",
        "R",
        "4",
        "7",
        "ß",
        "Я",
        "Λ",
        "†",
      ];
      const original = "BRAT";
      let glitched = "";

      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched +=
            glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }

      setGlitchText(glitched);

      setTimeout(() => setGlitchText("BRAT"), 100);
    }, 3000);

    // Update time
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(
        () => {
          setTerminalLines((prev) =>
            prev.map((line, index) =>
              index === currentLineIndex ? { ...line, typed: true } : line,
            ),
          );
          setCurrentLineIndex((prev) => prev + 1);
        },
        800 + Math.random() * 400,
      );

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, terminalLines.length]);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-mono overflow-x-hidden cursor-none bg-black text-white">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isClicking ? "clicking" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>

      {/* ASCII Art Background */}
      <div className="fixed inset-0 pointer-events-none text-xs leading-none overflow-hidden opacity-5">
        <pre className="ascii-bg-1">
          {`
    ██████╗ ██████╗  █████╗ ████████╗
    ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
    ██████╔╝██████╔╝███████║   ██║
    ██╔══██╗██╔══██╗██╔══██║   ██║
    ██████╔╝██║  ██║██║  ██║   ██║
    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝

    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ████████████████████████████████
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`}
        </pre>
        <pre className="ascii-bg-2">
          {`
    ╔══════════════════════════════════╗
    ║ > SYSTEM BREACH DETECTED         ║
    ║ > FIREWALL STATUS: COMPROMISED   ║
    ║ > ACCESS LEVEL: ROOT             ║
    ║ > THREAT LEVEL: MAXIMUM          ║
    ╚══════════════════════════════════╝

    [████████████████████████████████]
    [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
    [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]
    [████████████████████████████████]

    01001000 01000001 01000011 01001011
    01000101 01000100 00100000 01000010
    01011001 00100000 01000010 01010010
    01000001 01010100 00100000 01010100
    01000101 01000001 01001101 00100001
`}
        </pre>
        <pre className="ascii-bg-3">
          {`
    ┌─────────────────────────────────┐
    │ TERMINAL ACCESS GRANTED         │
    │ USER: anonymous_brat            │
    │ LOCATION: /dev/null             │
    │ STATUS: CHAOS_MODE_ENABLED      │
    └─────────────────────────────────┘
`}
        </pre>
      </div>

      {/* Terminal Header */}
      <header className="border-b border-white bg-black p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full border border-white"></div>
              <div className="w-3 h-3 rounded-full border border-white"></div>
            </div>
            <span className="text-sm">user@brat:~$</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-4 flex-1">
            <button
              onClick={() => scrollToSection("home")}
              className={`nav-link ${currentSection === "home" ? "active" : ""}`}
            >
              <Home className="w-4 h-4 mr-2" />
              ./home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`nav-link ${currentSection === "about" ? "active" : ""}`}
            >
              <User className="w-4 h-4 mr-2" />
              ./about
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`nav-link ${currentSection === "projects" ? "active" : ""}`}
            >
              <Code className="w-4 h-4 mr-2" />
              ./projects
            </button>
            <button
              onClick={() => scrollToSection("articles")}
              className={`nav-link ${currentSection === "articles" ? "active" : ""}`}
            >
              <FileText className="w-4 h-4 mr-2" />
              ./rants
            </button>
            <button
              onClick={() => scrollToSection("terminal")}
              className={`nav-link ${currentSection === "terminal" ? "active" : ""}`}
            >
              <Terminal className="w-4 h-4 mr-2" />
              ./shell
            </button>
            <a
              href="https://github.com/linux-brat"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link external-link"
            >
              <Github className="w-4 h-4 mr-2" />
              ./github
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </nav>

          <div className="text-sm whitespace-nowrap">
            {currentTime.toLocaleTimeString()} | uptime: ∞
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black mb-4 glitch-text">
              {glitchText}
            </h1>
            <div className="text-xl md:text-2xl mb-8 typewriter">
              <span className="border-r-2 border-white animate-pulse">
                for rebels who code in the dark_
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="brutal-card p-6">
              <Terminal className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">TERMINAL LORDS</h3>
              <p className="text-sm">
                GUI is for weaklings. Real nerds live in the terminal.
              </p>
            </div>
            <div className="brutal-card p-6">
              <Code className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">CODE WARRIORS</h3>
              <p className="text-sm">
                We write code that makes other developers cry.
              </p>
            </div>
            <div className="brutal-card p-6">
              <Skull className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">SYSTEM KILLERS</h3>
              <p className="text-sm">
                Breaking systems since 2008. It's not a bug, it's a feature.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="brutal-btn px-8 py-4 text-lg font-bold">
              sudo rm -rf /boring
            </button>
            <button className="brutal-btn-outline px-8 py-4 text-lg font-bold">
              ./configure --enable-chaos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 border-t border-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">404</div>
              <div className="text-sm">FUCKS GIVEN</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">∞</div>
              <div className="text-sm">BUGS CREATED</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">0</div>
              <div className="text-sm">SLEEP HOURS</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-sm">CAFFEINE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center">
            BRUTAL PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="brutal-card p-6 w-full max-w-sm group hover:scale-105 transition-all duration-500"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 border-2 border-white group-hover:border-black group-hover:bg-white transition-all duration-300">
                      <IconComponent 
                        className={`w-12 h-12 group-hover:text-black ${
                          project.animationType === 'bounce' ? 'group-hover:animate-bounce' :
                          project.animationType === 'pulse' ? 'group-hover:animate-pulse' :
                          'group-hover:animate-spin'
                        }`} 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center group-hover:text-black">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-6 text-center opacity-80 group-hover:text-black group-hover:opacity-100">
                    {project.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn px-4 py-2 text-sm font-bold flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      VIEW CODE
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 border-t border-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center">
            LATEST RANTS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Why Your Code Sucks",
                excerpt:
                  "A comprehensive guide to writing terrible software that somehow works.",
                author: "angry_dev",
                time: "2h ago",
                icon: Code,
              },
              {
                title: "Vim vs Emacs: The Holy War",
                excerpt:
                  "Spoiler alert: They both suck. Use nano like a real rebel.",
                author: "editor_troll",
                time: "5h ago",
                icon: Terminal,
              },
              {
                title: "I Broke Production Again",
                excerpt:
                  "It's Friday 5PM and I just pushed to master. Here's what happened.",
                author: "chaos_monkey",
                time: "1d ago",
                icon: Zap,
              },
              {
                title: "Docker is Overrated",
                excerpt:
                  "Containers are just fancy chroot jails. Change my mind.",
                author: "bare_metal",
                time: "2d ago",
                icon: HardDrive,
              },
              {
                title: "JavaScript: A Love Story",
                excerpt:
                  "Just kidding. It's a horror story. undefined is not a function.",
                author: "js_victim",
                time: "3d ago",
                icon: Coffee,
              },
              {
                title: "My WiFi Password is 'password'",
                excerpt:
                  "Security through obscurity is dead. Long live convenience.",
                author: "security_expert",
                time: "1w ago",
                icon: Wifi,
              },
            ].map((article, index) => (
              <article
                key={index}
                className="brutal-card p-6 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
              >
                <article.icon className="w-8 h-8 mb-4 group-hover:animate-bounce" />
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-sm mb-4 opacity-80">{article.excerpt}</p>
                <div className="flex justify-between text-xs">
                  <span>@{article.author}</span>
                  <span>{article.time}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section id="terminal" className="py-20 border-t border-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="brutal-terminal-card p-8"
            onMouseEnter={() => setIsTerminalHovered(true)}
            onMouseLeave={() => setIsTerminalHovered(false)}
          >
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${isTerminalHovered ? "bg-black border-2 border-white animate-pulse" : "bg-white"}`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${isTerminalHovered ? "border-black bg-white animate-bounce" : "border-white bg-black"}`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${isTerminalHovered ? "border-white bg-black animate-pulse" : "border-white bg-black"}`}
                ></div>
              </div>
              <span
                className={`text-sm transition-all duration-500 ${isTerminalHovered ? "text-black bg-white px-2 py-1" : "text-white"}`}
              >
                Terminal - bash{" "}
                {isTerminalHovered && (
                  <span className="animate-ping inline-block w-2 h-2 bg-black rounded-full ml-2"></span>
                )}
              </span>
            </div>
            <div className="font-mono text-sm space-y-2 relative">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    line.typed
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  } ${line.indent ? "ml-4" : ""} ${
                    line.text.startsWith("$")
                      ? `font-bold ${isTerminalHovered ? "text-black bg-white px-1" : "text-white"}`
                      : line.text.includes("error") ||
                          line.text.includes("cannot access")
                        ? `${isTerminalHovered ? "text-white bg-black border-l-4 border-white pl-2" : "text-white"}`
                        : line.text.includes("Welcome")
                          ? `${isTerminalHovered ? "text-black bg-white px-1" : "text-white"}`
                          : line.text.includes("What?")
                            ? `${isTerminalHovered ? "text-white bg-black border border-white px-1" : "text-white"}`
                            : `${isTerminalHovered ? "text-black" : "text-white"}`
                  }`}
                >
                  {line.typed && (
                    <span className="terminal-line">{line.text}</span>
                  )}
                </div>
              ))}
              <div className="flex items-center">
                <span
                  className={`font-bold transition-all duration-500 ${isTerminalHovered ? "text-black bg-white px-1" : "text-white"}`}
                >
                  ${" "}
                </span>
                <span
                  className={`border-r-2 ml-1 transition-all duration-300 ${
                    isTerminalHovered
                      ? "border-black animate-ping bg-white"
                      : "border-white animate-pulse"
                  }`}
                >
                  &nbsp;
                </span>
              </div>
              {/* Minimal scan lines effect on hover */}
              {isTerminalHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="scan-line"></div>
                  <div
                    className="scan-line"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div className="terminal-grid"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <div className="space-y-2 text-sm">
                <div>Email: dev@null</div>
                <div>Phone: 404-NOT-FOUND</div>
                <div>Address: localhost:3000</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">LINKS</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/linux-brat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-white hover:text-black px-2 py-1 cursor-pointer flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  ./view_github.sh
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a
                  href="https://discord.gg/yJcyvGAZNM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-white hover:text-black px-2 py-1 cursor-pointer flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  ./join_discord.sh
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a
                  href="https://ko-fi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-white hover:text-black px-2 py-1 cursor-pointer flex items-center"
                >
                  <Coffee className="w-4 h-4 mr-2" />
                  ./support_me.sh
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">DISCLAIMER</h3>
              <p className="text-sm">
                We are not responsible for any mental breakdowns, existential
                crises, or spontaneous combustion caused by our content.
              </p>
            </div>
          </div>

          <div className="text-center border-t border-white pt-8">
            <div className="text-2xl font-black mb-2">BRAT</div>
            <div className="text-sm">
              © 2025 - Built with tears and caffeine
            </div>
            <div className="text-xs mt-2 opacity-60">
              [Ctrl+C] to exit | [Ctrl+Z] to suspend reality
            </div>
          </div>
        </div>
      </footer>

      {/* Color Invert Button */}
      <ColorInvertButton />
    </div>
  );
}

function ColorInvertButton() {
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => {
    setIsInverted(!isInverted);
    document.documentElement.style.filter = isInverted
      ? "none"
      : "invert(1) hue-rotate(180deg)";
  };

  return (
    <button
      onClick={toggleInvert}
      className="fixed bottom-6 right-6 p-4 rounded-full border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300 z-50 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
      title={isInverted ? "Switch to Normal Colors" : "Invert All Colors"}
      style={{
        filter: isInverted ? "invert(1) hue-rotate(180deg)" : "none",
      }}
    >
      <Palette className="w-6 h-6" />
    </button>
  );
}

export default App;
