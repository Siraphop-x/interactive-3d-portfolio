import { useState, useEffect, useRef } from "react";

function FunZone() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [gameError, setGameError] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGameLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGameError = () => {
    setGameError(true);
  };

  return (
    <section
      id="fun-zone"
      className="py-20 px-4 bg-transparent relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-pink-400">&lt;/</span>
          <span className="text-white tracking-widest uppercase">Fun Zone</span>
          <span className="text-pink-400">&gt;</span>
        </h2>
        <p
          className="text-center text-slate-400 mb-12 font-mono text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Take a break and play some games! 🎮✨
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Galaxy Blaster Game */}
          <div
            className="bg-gradient-to-br from-[#050810]/90 to-[#0a0f1a]/90 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-pink-500/30 hover:border-pink-400/70 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(236,72,153,0.5)] animate-pulse">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                      Galaxy Blaster
                    </h3>
                    <p className="text-slate-400 text-sm font-mono">Epic Space Shooter Action!</p>
                  </div>
                </div>
                <span className="px-4 py-2 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-xl border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  🎯 SPACE SHOOTER
                </span>
              </div>
              
              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                Blast through waves of enemies in this exciting space shooter! Control your ship, collect power-ups, and beat the high score.
              </p>

              {/* Controls */}
              <div className="bg-gradient-to-r from-[#0a0f1a] to-[#050810] rounded-2xl p-4 mb-4 border border-cyan-500/20">
                <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2 text-sm">
                  <span className="text-lg">⌨️</span>
                  <span>How to Play</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-cyan-500/5 rounded-lg p-2 border border-cyan-500/20">
                    <span className="text-xl">⬆️⬇️⬅️➡️</span>
                    <span className="text-slate-200">Arrow Keys: Move</span>
                  </div>
                  <div className="flex items-center gap-2 bg-pink-500/5 rounded-lg p-2 border border-pink-500/20">
                    <span className="text-xl">🔫</span>
                    <span className="text-slate-200">Space: Shoot</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-500/5 rounded-lg p-2 border border-purple-500/20">
                    <span className="text-xl">💎</span>
                    <span className="text-slate-200">Collect Power-ups</span>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/5 rounded-lg p-2 border border-yellow-500/20">
                    <span className="text-xl">🏆</span>
                    <span className="text-slate-200">Beat High Score</span>
                  </div>
                </div>
              </div>

              {/* Game Container */}
              <div className="relative w-full h-[400px] bg-black/70 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                {!isGameLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 to-purple-900/50 z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                      <p className="text-cyan-300 font-mono text-lg">Loading Game...</p>
                      <p className="text-slate-500 text-sm mt-2">Please wait</p>
                    </div>
                  </div>
                )}
                
                {gameError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 to-red-900/50 z-10">
                    <div className="text-center">
                      <p className="text-red-400 mb-6 text-xl">⚠️ Failed to load game</p>
                      <a
                        href="https://galaxy-blaster-smoky.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      >
                        Open in New Tab
                      </a>
                    </div>
                  </div>
                )}

                <iframe
                  ref={iframeRef}
                  src="https://galaxy-blaster-smoky.vercel.app/"
                  className="w-full h-full border-0"
                  title="Galaxy Blaster Game"
                  onLoad={() => setIsGameLoaded(true)}
                  onError={handleGameError}
                  allow="fullscreen"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-4">
                <a
                  href="https://galaxy-blaster-smoky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-sm font-bold tracking-wide text-white border-2 border-pink-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  FULLSCREEN
                </a>
                <a
                  href="https://github.com/Siraphop-x/galaxy-blaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800/70 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 text-sm font-bold tracking-wide text-slate-200 hover:text-white border-2 border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  SOURCE CODE
                </a>
              </div>

              {/* Stats/Info */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  <span className="font-mono">ONLINE</span>
                </div>
                <div className="w-px h-4 bg-slate-600"></div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400">⚡</span>
                  <span className="font-mono">HTML5 Canvas</span>
                </div>
                <div className="w-px h-4 bg-slate-600"></div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-pink-400">🎮</span>
                  <span className="font-mono">Pure JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunZone;
