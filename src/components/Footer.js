import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
export default function Footer() {
    return (_jsx("footer", { className: "bg-slate-900 text-white py-10", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6", children: [_jsxs("div", { children: [_jsx("p", { className: "text-amber-400 font-bold text-lg", children: "Manojkumar Endluri" }), _jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Senior Quality Engineer \u00B7 Chennai, India" })] }), _jsx("div", { className: "flex items-center gap-5", children: [
                        { icon: Github, href: 'https://github.com/manojkumarendluri' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/ursmanoj56/' },
                        { icon: Instagram, href: 'https://www.instagram.com/manojs_stories/' },
                    ].map(({ icon: Icon, href }) => (_jsx("a", { href: href, target: "_blank", rel: "noreferrer", className: "text-slate-400 hover:text-amber-400 transition-colors", children: _jsx(Icon, { size: 18 }) }, href))) }), _jsxs("p", { className: "text-slate-500 text-sm flex items-center gap-1", children: ["Built with ", _jsx(Heart, { size: 13, className: "text-red-400 fill-red-400" }), " in Chennai \u00A9 2025"] })] }) }));
}
