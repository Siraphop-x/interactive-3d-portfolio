function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      borderColor: "border-pink-500/50",
      hoverBg: "hover:bg-pink-500/20",
      shadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      borderColor: "border-red-500/50",
      hoverBg: "hover:bg-red-500/20",
      shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/",
      borderColor: "border-cyan-500/50",
      hoverBg: "hover:bg-cyan-500/20",
      shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Siraphop-x",
      borderColor: "border-purple-500/50",
      hoverBg: "hover:bg-purple-500/20",
      shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="py-12 px-4 border-t border-cyan-500/20 bg-transparent relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Social Buttons - Circle Grid Style */}
        <div className="flex justify-center mb-10" data-aos="zoom-in">
          <div id="social-buttons" className="grid grid-cols-2 gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-16 h-16 sm:w-20 sm:h-20
                  bg-[#0a0f1a]/80 backdrop-blur-sm
                  border ${social.borderColor}
                  flex items-center justify-center
                  text-slate-300
                  transition-all duration-300
                  hover:scale-105 hover:text-white
                  ${social.hoverBg} ${social.shadow}
                  ${index === 0 ? "rounded-tl-[40px] rounded-tr-xl rounded-br-xl rounded-bl-xl" : ""}
                  ${index === 1 ? "rounded-tl-xl rounded-tr-[40px] rounded-br-xl rounded-bl-xl" : ""}
                  ${index === 2 ? "rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[40px]" : ""}
                  ${index === 3 ? "rounded-tl-xl rounded-tr-xl rounded-br-[40px] rounded-bl-xl" : ""}
                `}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest uppercase mb-2">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-slate-500"> BUILT_BY </span>
            <span className="text-pink-400 font-bold drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
              SIRAPHOP
            </span>
            <span className="text-cyan-400"> /&gt;</span>
          </p>
          <p className="text-xs text-slate-600 font-mono">
            SYS.DATE({new Date().getFullYear()}) © ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
