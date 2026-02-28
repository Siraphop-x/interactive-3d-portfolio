import { features } from "./aboutData";

function About() {
  const isHologram = false; // Add local fallback

  return (
    <section id="about" className="py-20 px-4 relative bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white tracking-widest uppercase">About Me</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>

        <div className="flex flex-col items-center gap-12 w-full">
          {/* Top Side: Profile Image */}
          <div className="w-full flex justify-center" data-aos="fade-up">
            {/* Cyberpunk Frame */}
            <div
              className={`relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 group ${
                isHologram
                  ? "border-[#00ffcc]/50 shadow-[0_0_30px_rgba(0,255,204,0.3)] hover:shadow-[0_0_50px_rgba(0,255,204,0.6)]"
                  : "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] hover:border-pink-500/80"
              }`}
            >
              {/* Background gradient behind image */}
              <div
                className={`absolute inset-0 z-0 bg-gradient-to-tr ${
                  isHologram
                    ? "from-[#0a1a15] to-[#00ffcc]/20"
                    : "from-[#050810] to-cyan-500/20"
                }`}
              ></div>

              {/* The Image */}
              <img
                src="/Phopsuper.png"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover object-top transition-all duration-500 mix-blend-lighten opacity-100 md:opacity-90 md:hover:opacity-100 md:hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x400/050810/06b6d4?text=PROFILE";
                }}
              />

              {/* Scanline Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOUgxVjM5aDM4eiIgZmlsbD0icmdiYSg2LCAxODIsIDIxMiwgMC4xKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] mix-blend-overlay opacity-30 group-hover:opacity-10 transition-opacity"></div>
            </div>
          </div>

          {/* Bottom Side: Features */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-[#050810]/80 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  index === 0
                    ? "border-pink-500/30 hover:border-pink-500/80 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                    : "border-cyan-500/30 hover:border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                }`}
                data-aos="fade-up"
                data-aos-delay={index === 0 ? "100" : "200"}
              >
                <div
                  className={`flex items-center gap-3 mb-4 border-b pb-4 ${
                    index === 0 ? "border-pink-500/20" : "border-cyan-500/20"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      index === 0
                        ? "bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.5)] text-pink-400"
                        : "bg-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.5)] text-cyan-400"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold tracking-wider ${
                      index === 0 ? "text-pink-400" : "text-cyan-400"
                    }`}
                  >
                    {feature.text}
                  </h3>
                </div>
                <div className="text-sm font-mono text-slate-300">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            {
              value: "5+",
              label: "Projects",
              color: "text-pink-400",
              border: "border-pink-500/30",
              hoverBorder: "hover:border-pink-500/80",
              shadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
            },
            {
              value: "4",
              label: "Months Internship",
              color: "text-cyan-400",
              border: "border-cyan-500/30",
              hoverBorder: "hover:border-cyan-500/80",
              shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
            },
            {
              value: "CS",
              label: "Graduate",
              color: "text-yellow-400",
              border: "border-yellow-500/30",
              hoverBorder: "hover:border-yellow-500/80",
              shadow: "hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]",
            },
            {
              value: "BRU",
              label: "University",
              color: "text-purple-400",
              border: "border-purple-500/30",
              hoverBorder: "hover:border-purple-500/80",
              shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-[#050810]/80 backdrop-blur-sm rounded-xl border ${stat.border} ${stat.hoverBorder} ${stat.shadow} transition-all duration-300 group`}
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
            >
              <div
                className={`text-3xl sm:text-4xl font-black ${stat.color} group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_currentColor]`}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
