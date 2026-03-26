// src/components/Hero.js
const Hero = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Information Communication Technology Student | MERN Stack Developer | Network Infrastructure Specialist
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
            View My Work
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;