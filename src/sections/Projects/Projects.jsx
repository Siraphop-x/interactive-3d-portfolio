import { useState } from "react";
import { ProjectList } from "./projectData";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? ProjectList : ProjectList.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-transparent relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none will-change-transform"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none will-change-transform"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white tracking-widest uppercase">Projects</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        <p
          className="text-center text-slate-400 mb-12 font-mono"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A collection of projects I've worked on
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-[#050810]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col hover:-translate-y-2 will-change-transform"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 bg-[#0a0f1a] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 border-b border-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

                {/* Custom icon or text for project image placeholder */}
                <span className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {index % 3 === 0 ? "💻" : index % 3 === 1 ? "🚀" : "🔧"}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    {project.category.split("(")[0]}
                  </span>
                  <span className="text-xs font-mono text-pink-400/80">
                    {project.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-cyan-400 transition-colors tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono bg-[#0a0f1a] text-purple-300 rounded-md border border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <div className="relative group/tooltip">
                      <span className="px-2.5 py-1 text-xs font-mono bg-pink-500/10 text-pink-300 rounded-md border border-pink-500/40 shadow-[0_0_10px_rgba(236,72,153,0.2)] cursor-pointer hover:bg-pink-500/20 hover:border-pink-400/70 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-200">
                        +{project.technologies.length - 5}
                      </span>
                      {/* Cyberpunk Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 scale-95 group-hover/tooltip:scale-100">
                        {/* Glowing border container */}
                        <div className="relative bg-[#03040d] border border-pink-500/60 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(236,72,153,0.5),inset_0_0_20px_rgba(236,72,153,0.03)] min-w-[160px]">
                          {/* Top scan line accent */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

                          <p className="text-pink-400 text-[10px] font-mono tracking-widest uppercase mb-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse inline-block"></span>
                            STACK.LIST
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(5).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs font-mono bg-purple-500/10 text-cyan-300 rounded border border-cyan-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-pink-500/60"></div>
                      </div>
                    </div>
                  )}
                </div>
                {project.liveDemo && project.liveDemo !== "" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-sm font-bold tracking-wide text-white border border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-2"
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
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    LIVE DEMO
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/50 hover:bg-cyan-500/20 text-sm font-bold tracking-wide text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] mt-auto"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    VIEW CODE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {ProjectList.length > 3 && (
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold tracking-wider uppercase rounded-xl border-2 border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300"
                style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {showAll ? "Show Less" : `View All Projects (${ProjectList.length})`}
            </button>
            <p className="text-slate-500 text-sm mt-3 font-mono">
              {showAll 
                ? `Showing all ${ProjectList.length} projects` 
                : `Showing 3 of ${ProjectList.length} projects`
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
