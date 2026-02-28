import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  Center,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

import { roles } from "./heroData";

// 3D Typography Component
function Typography3D() {
  const group = useRef();
  const [isHologram, setIsHologram] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    // Subtle rotation based on mouse position
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      (state.mouse.x * Math.PI) / 4,
      0.1,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      (state.mouse.y * Math.PI) / 4,
      0.1,
    );
  });

  return (
    <group
      ref={group}
      onClick={(e) => {
        e.stopPropagation();
        setIsHologram(!isHologram);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={2}
        floatingRange={[-0.2, 0.2]}
      >
        <Center>
          <Text3D
            font="https://unpkg.com/three@0.77.0/examples/fonts/helvetiker_bold.typeface.json"
            size={1.2}
            height={0.4}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.03}
            bevelOffset={0}
            bevelSegments={5}
            lineHeight={0.7}
            letterSpacing={-0.02}
          >
            {`FULL\nSTACK\nDEV`}
            {isHologram ? (
              <meshStandardMaterial
                color="#ec4899"
                emissive="#06b6d4"
                emissiveIntensity={0.8}
                roughness={0.1}
                metalness={0.9}
                wireframe={true}
                wireframeLinewidth={2}
              />
            ) : (
              <meshStandardMaterial
                color="#06b6d4"
                emissive="#ec4899"
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
              />
            )}
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}

function Hero({ scrollToSection }) {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(100 + Math.random() * 100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 mt-10 mb-10">
        {/* Left Side: Information */}
        <div className="text-left" data-aos="fade-right" data-aos-delay="200">
          {/* Holographic / Cyberpunk Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-purple-900/40 border border-purple-500/50 text-purple-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(168,85,247,0.4)] backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
            SYS.PORTFOLIO_READY
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Digital
            </span>
            <br />
            Experiences.
          </h1>

          <div className="text-xl sm:text-2xl text-cyan-300 font-mono mb-8 h-[32px] flex items-center">
            <span className="text-pink-500 mr-2">&gt;</span>
            {displayText}
            <span className="text-pink-500 animate-pulse ml-1">_</span>
          </div>

          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
            Hi, I'm{" "}
            <span className="text-cyan-400 font-semibold">
              Siraphop Prawdaeng
            </span>
            . I build immersive, interactive, and gamified web experiences
            blending modern front-end tech with striking 3D aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold tracking-wider uppercase hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/50"
            >
              Explore Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[#0a0f1a]/80 backdrop-blur-md border border-purple-500/50 text-purple-300 rounded-xl font-bold tracking-wider uppercase hover:bg-purple-900/30 hover:text-purple-200 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500 text-sm font-mono tracking-wide">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              STATUS: ONLINE
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-cyan-500/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              LOC: BANGKOK
            </div>
          </div>
        </div>

        {/* Right Side: 3D Typography */}
        <div
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center cursor-move"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* A soft glowing backdrop for the 3D element */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

          <div className="absolute w-full h-full z-10">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                color="#06b6d4"
              />
              <pointLight
                position={[-10, -10, -10]}
                intensity={1}
                color="#ec4899"
              />
              <Environment preset="city" />

              <Typography3D />

              <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
                color="#ec4899"
              />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-auto cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-cyan-500/50 text-xs font-mono uppercase tracking-widest">
          Scroll Down
        </span>
        <svg
          className="w-6 h-6 text-cyan-500/70 hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
