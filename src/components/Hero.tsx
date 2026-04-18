import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2940 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
              alt="Endluri Manojkumar"
              className="w-36 h-36 rounded-full object-cover border-4 border-amber-400 shadow-2xl"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
          </div>
        </div>

        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Senior QA Automation Engineer</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Endluri Manojkumar
        </h1>
        <p className="text-slate-300 text-lg mb-2">B.Tech ECE &nbsp;·&nbsp; Python Specialist &nbsp;·&nbsp; AI Builder</p>
        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto">
          Crafting robust automation frameworks, building AI-powered tools, and telling stories through code, camera, and words.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <a
            href="https://github.com/ursmanoj56"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors text-sm"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-slate-500 text-slate-200 px-6 py-3 rounded-lg font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors text-sm"
          >
            <Mail size={16} /> Contact Me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-500 text-slate-200 px-6 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors text-sm"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto text-center">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '3', label: 'AI Tools Built' },
            { value: '100+', label: 'Test Frameworks' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
              <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#resume"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </header>
  );
}
