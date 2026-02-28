import { useEffect, useRef, useState } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const trailsRef = useRef([]);
  const timeoutRef = useRef(null);

  // Trail settings
  const trailCount = 12;
  const colors = [
    "rgba(139, 92, 246, 0.8)", // violet-500
    "rgba(168, 85, 247, 0.7)", // purple-500
    "rgba(192, 132, 252, 0.6)", // purple-400
    "rgba(147, 197, 253, 0.5)", // blue-300
    "rgba(165, 180, 252, 0.4)", // indigo-300
    "rgba(196, 181, 253, 0.3)", // violet-300
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set moving to false after mouse stops
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Animate trails
  useEffect(() => {
    let animationId;
    const positions = Array(trailCount).fill({ x: 0, y: 0 });

    const animate = () => {
      positions.forEach((_, index) => {
        const trail = trailsRef.current[index];
        if (!trail) return;

        const delay = (index + 1) * 0.08;
        const targetX = mousePosition.x;
        const targetY = mousePosition.y;

        const currentX = parseFloat(trail.dataset.x || 0);
        const currentY = parseFloat(trail.dataset.y || 0);

        const newX = currentX + (targetX - currentX) * (0.3 - delay * 0.02);
        const newY = currentY + (targetY - currentY) * (0.3 - delay * 0.02);

        trail.dataset.x = newX;
        trail.dataset.y = newY;

        trail.style.left = `${newX}px`;
        trail.style.top = `${newY}px`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          opacity: isMoving ? 1 : 0.6,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full blur-xl animate-pulse"
          style={{
            width: "80px",
            height: "80px",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Inner glow */}
        <div
          className="absolute rounded-full blur-md"
          style={{
            width: "40px",
            height: "40px",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Core dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "8px",
            background: "linear-gradient(135deg, #a855f7, #6366f1)",
            boxShadow:
              "0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(139, 92, 246, 0.5)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Trail particles */}
      {Array.from({ length: trailCount }).map((_, index) => {
        const size = Math.max(6 - index * 0.4, 2);
        const colorIndex = Math.min(index, colors.length - 1);

        return (
          <div
            key={index}
            ref={(el) => (trailsRef.current[index] = el)}
            data-x="0"
            data-y="0"
            className="fixed pointer-events-none rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: colors[colorIndex],
              boxShadow: `0 0 ${10 - index}px ${colors[colorIndex]}`,
              transform: "translate(-50%, -50%)",
              opacity: isMoving ? 1 - index * 0.07 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        );
      })}

      {/* Sparkle particles on movement */}
      {isMoving && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="fixed pointer-events-none animate-ping"
              style={{
                left: mousePosition.x + (Math.random() - 0.5) * 40,
                top: mousePosition.y + (Math.random() - 0.5) * 40,
                width: "4px",
                height: "4px",
                background: "white",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MouseTracker;
