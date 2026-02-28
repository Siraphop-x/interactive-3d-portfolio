import { Canvas } from "@react-three/fiber";
import { Galaxy } from "./Galaxy";

function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#050510]">
      {/* Galaxy Canvas rendered behind everything globally */}
      <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-60">
        <Canvas camera={{ position: [0, 4, 10], fov: 60 }}>
          <Galaxy />
        </Canvas>
      </div>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] animate-pulse mix-blend-screen"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse mix-blend-screen"
        style={{ animationDelay: "1000ms" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] animate-bounce mix-blend-screen"
        style={{ animationDuration: "7s" }}
      ></div>

      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOUgxVjM5aDM4eiIgZmlsbD0icmdiYSg2LCAxODIsIDIxMiwgMC4wMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
    </div>
  );
}

export default Background;
