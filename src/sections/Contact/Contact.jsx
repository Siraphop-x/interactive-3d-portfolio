import { useState } from "react";
import {
  conTact,
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "./contactData";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("TRANSMITTING...");
    const formData = new FormData(event.target);

    // ⚠️ ตรงนี้คือจุดสำคัญ: ให้เอา Access Key จากอีเมลมาใส่แทนที่ "YOUR_ACCESS_KEY_HERE"
    // สมัครฟรีเพื่อรับ Access Key ได้ที่: https://web3forms.com/ (ใส่อีเมลตัวเองแล้วมันจะส่งรหัสมาให้)
    formData.append("access_key", "99e89307-f49f-4b9d-870a-f53759f68e6b");

    // ตั้งค่าหัวข้ออีเมล และ ผู้ส่งให้เรารู้ทันทีว่าเป็นงานจ้าง
    formData.append("subject", "🚀 [Portfolio] มีคนทักแชทมาจากหน้าเว็บไซต์!");
    formData.append("from_name", "Portfolio System Notification");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("TRANSMISSION_SUCCESSFUL");
        event.target.reset(); // ล้างข้อมูลในฟอร์มเมื่อส่งเสร็จ

        // ให้ข้อความ Success หายไปเองหลังผ่านไป 3 วินาที
        setTimeout(() => setResult(""), 3000);
      } else {
        console.log("Error", data);
        setResult("TRANSMISSION_FAILED: " + data.message);
      }
    } catch (error) {
      setResult("CONNECTION_ERROR_PLEASE_TRY_AGAIN");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-transparent relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
          data-aos="fade-down"
        >
          <span className="text-pink-500">&lt;</span>
          <span className="text-white tracking-widest uppercase">Contact</span>
          <span className="text-pink-500">/&gt;</span>
        </h2>
        <p
          className="text-center text-slate-400 mb-12 font-mono"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          SYS.MSG("Let's connect! Feel free to reach out.")
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
            {conTact.map((info, index) => (
              <a
                key={index}
                href={info.link || "#"}
                className={`flex items-center gap-4 p-4 bg-[#0a0f1a]/80 backdrop-blur-sm rounded-xl border ${index % 2 === 0 ? "border-cyan-500/30 hover:border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]" : "border-purple-500/30 hover:border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"} transition-all duration-300 group`}
              >
                <div
                  className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${index % 2 === 0 ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" : "bg-purple-500/10 border border-purple-500/30 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"}`}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-1">
                    {info.title}
                  </div>
                  <div
                    className={`font-bold tracking-wide ${index % 2 === 0 ? "text-cyan-100 group-hover:text-cyan-400" : "text-purple-100 group-hover:text-purple-400"} transition-colors`}
                  >
                    {info.description}
                  </div>
                </div>
              </a>
            ))}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Siraphop-x"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0a0f1a]/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400/80 text-slate-400 hover:text-cyan-400 transition-all flex-1 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group"
              >
                <svg
                  className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-bold tracking-widest uppercase text-xs">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0a0f1a]/80 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-400/80 text-slate-400 hover:text-purple-400 transition-all flex-1 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group"
              >
                <svg
                  className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-bold tracking-widest uppercase text-xs">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div
            className="bg-[#0a0f1a]/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.05)]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-lg font-bold text-pink-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"></span>
              DIRECT_MESSAGE
            </h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#050810] border border-slate-800 rounded-xl focus:outline-none focus:border-pink-500 text-white placeholder-slate-600 transition-colors"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#050810] border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 bg-[#050810] border border-slate-800 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-slate-600 resize-none transition-colors"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                disabled={result === "TRANSMITTING..."}
                className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-xl font-bold tracking-widest uppercase text-white hover:opacity-90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(236,72,153,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {result === "TRANSMITTING..." ? "TRANSMITTING..." : "TRANSMIT"}
              </button>

              {/* Status Message Display */}
              {result && (
                <div
                  className={`text-center font-mono text-sm mt-4 p-2 rounded-lg border backdrop-blur-sm ${
                    result.includes("SUCCESS")
                      ? "text-green-400 border-green-500/30 bg-green-500/10"
                      : result.includes("TRANSMITTING")
                        ? "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 animate-pulse"
                        : "text-red-400 border-red-500/30 bg-red-500/10"
                  }`}
                >
                  <span className="mr-2">&gt;</span>
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
