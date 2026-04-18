import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'emanoj.kumar56@gmail.com', href: 'mailto:emanoj.kumar56@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 [Your Number]', href: 'tel:+91' },
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: '#' },
];

const socials = [
  { icon: Github, label: 'GitHub', handle: '@ursmanoj56', href: 'https://github.com/ursmanoj56', color: 'hover:text-slate-900' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Endluri Manojkumar', href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-600' },
  { icon: Twitter, label: 'Twitter', handle: '@yourhandle', href: 'https://twitter.com/yourprofile', color: 'hover:text-sky-500' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Open to collaborations, freelance projects, and interesting conversations about QA, AI, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="space-y-5 mb-10">
              {contactDetails.map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      <Icon size={20} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{item.label}</p>
                      <p className="text-slate-800 font-medium group-hover:text-amber-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-4">Social Profiles</p>
              <div className="space-y-3">
                {socials.map(s => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 text-slate-600 ${s.color} transition-colors group`}
                    >
                      <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{s.label}</p>
                        <p className="text-xs text-slate-400">{s.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm">Thank you for reaching out. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
