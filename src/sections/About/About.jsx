import { features } from "./aboutData";

function About() {
  return (
    <section id="about" className="py-20 px-4 relative bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white tracking-widest uppercase">About Me</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#050810]/80 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                index === 0
                  ? "border-pink-500/30 hover:border-pink-500/80 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                  : "border-cyan-500/30 hover:border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              }`}
              data-aos={index === 0 ? "fade-right" : "fade-left"}
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
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
