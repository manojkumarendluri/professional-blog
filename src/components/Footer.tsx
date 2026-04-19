import { Github, Linkedin, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-amber-400 font-bold text-lg">Manojkumar Endluri</p>
          <p className="text-slate-400 text-sm mt-1">Senior Quality Engineer · Chennai, India</p>
        </div>
        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/manojkumarendluri' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ursmanoj56/' },
            { icon: Instagram, href: 'https://www.instagram.com/manojs_stories/' },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Built with <Heart size={13} className="text-red-400 fill-red-400" /> in Chennai © 2025
        </p>
      </div>
    </footer>
  )
}
