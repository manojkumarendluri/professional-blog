import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
const contactDetails = [
    { icon: Mail, label: 'Email', value: 'manoj.endluri01@gmail.com', href: 'mailto:manoj.endluri01@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9740808574', href: 'tel:+919740808574' },
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: '#' },
];
const socials = [
    { icon: Github, label: 'GitHub', handle: '@manojkumarendluri', href: 'https://github.com/manojkumarendluri', color: 'hover:text-slate-900' },
    { icon: Linkedin, label: 'LinkedIn', handle: 'Manojkumar Endluri', href: 'https://www.linkedin.com/in/ursmanoj56/', color: 'hover:text-blue-600' },
    { icon: Instagram, label: 'Instagram', handle: '@manojs_stories', href: 'https://www.instagram.com/manojs_stories/', color: 'hover:text-pink-500' },
];
export default function Contact() {
    return (_jsx("section", { id: "contact", className: "py-24 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2", children: "Get in Touch" }), _jsx("h2", { className: "text-4xl font-bold text-slate-900 mb-4", children: "Contact" }), _jsx("p", { className: "text-slate-500 max-w-md mx-auto", children: "Open to collaborations, freelance projects, and interesting conversations about QA automation and AI modernization." })] }), _jsxs("div", { className: "space-y-10", children: [_jsx("div", { className: "space-y-5", children: contactDetails.map(item => {
                                const Icon = item.icon;
                                return (_jsxs("a", { href: item.href, className: "flex items-center gap-4 group", children: [_jsx("div", { className: "w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors", children: _jsx(Icon, { size: 20, className: "text-amber-500" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-slate-400 uppercase tracking-wide font-semibold", children: item.label }), _jsx("p", { className: "text-slate-800 font-medium group-hover:text-amber-600 transition-colors", children: item.value })] })] }, item.label));
                            }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-500 uppercase tracking-widest font-semibold mb-4", children: "Social Profiles" }), _jsx("div", { className: "space-y-3", children: socials.map(s => {
                                        const Icon = s.icon;
                                        return (_jsxs("a", { href: s.href, target: "_blank", rel: "noreferrer", className: `flex items-center gap-3 text-slate-600 ${s.color} transition-colors group`, children: [_jsx("div", { className: "w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors", children: _jsx(Icon, { size: 16 }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: s.label }), _jsx("p", { className: "text-xs text-slate-400", children: s.handle })] })] }, s.label));
                                    }) })] })] })] }) }));
}
