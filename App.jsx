export default function App() {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <h1 className="font-bold text-xl">MyBrand</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Docs</a>
        </div>

        <button className="px-4 py-2 rounded-lg bg-white text-black hover:scale-105 transition">
          Login
        </button>
      </div>

      {/* HERO */}
      <div className="relative flex items-center justify-center text-center min-h-[75vh] px-6 overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-3xl opacity-30 top-10 left-10 rounded-full"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-600 blur-3xl opacity-30 bottom-10 right-10 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Build Modern Websites<br />Like a Pro
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Clean UI, glass effects, smooth layout and modern design system.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 px-10 py-16">

        {[
          "⚡ Fast Performance",
          "🎨 Modern UI Design",
          "🚀 Easy Deployment",
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition"
          >
            {item}
          </div>
        ))}

      </div>

      {/* IMAGE / CARD SECTION */}
      <div className="px-10 pb-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col md:flex-row items-center gap-6">

          <img
            src="images (30).jpg"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border border-white/20"
          />

          <div>
            <h2 className="text-2xl font-bold">Modern UI Card</h2>
            <p className="text-gray-400 mt-2">
              This is a glassmorphism style card with image integration and modern spacing.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-10 border-t border-white/10 text-gray-400">
        © 2026 MyBrand. All rights reserved.
      </div>

    </div>
  );
}