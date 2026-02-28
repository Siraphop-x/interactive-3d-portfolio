import { checklistItems } from "./educationData";

function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-transparent relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white tracking-widest uppercase">
            Experience
          </span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-pink-500/50 to-purple-500/50 transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div
                    className={`ml-12 md:ml-0 bg-[#0a0f1a]/80 backdrop-blur-sm rounded-xl p-6 border ${index % 2 === 0 ? "border-cyan-500/30 hover:border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "border-pink-500/30 hover:border-pink-500/80 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"} transition-all duration-300 group ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <span
                        className={`p-3 rounded-lg bg-[#050810] border ${index % 2 === 0 ? "border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "border-pink-500/30 text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]"}`}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <h3
                          className={`text-lg font-bold text-slate-200 ${index % 2 === 0 ? "group-hover:text-cyan-400" : "group-hover:text-pink-400"} transition-colors tracking-wide leading-tight`}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`flex items-center gap-2 text-sm font-mono text-slate-400 mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        >
                          <span
                            className={
                              index % 2 === 0
                                ? "text-cyan-400"
                                : "text-pink-400"
                            }
                          >
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-mono">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 mt-8 border-4 border-[#050810] ${index % 2 === 0 ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" : "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,1)]"} z-10`}
                ></div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
