import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const navLinks = [
    { label: 'Resume', href: '#resume' },
    { label: 'Tools', href: '#ai-tools' },
    { label: 'Automation', href: '#automation' },
    { label: 'Interests', href: '#personal-interests' },
    { label: 'Contact', href: '#contact' },
];
export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (_jsxs("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'}`, children: [_jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between", children: [_jsx("a", { href: "#", className: "text-amber-400 font-bold text-xl tracking-tight", children: "Manojkumar Endluri" }), _jsx("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map(link => (_jsx("a", { href: link.href, className: "text-slate-200 hover:text-amber-400 text-sm font-medium transition-colors duration-200", children: link.label }, link.href))) }), _jsx("button", { className: "md:hidden text-white", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? _jsx(X, { size: 22 }) : _jsx(Menu, { size: 22 }) })] }), menuOpen && (_jsx("div", { className: "md:hidden bg-slate-900 px-6 pb-4 flex flex-col gap-4", children: navLinks.map(link => (_jsx("a", { href: link.href, onClick: () => setMenuOpen(false), className: "text-slate-200 hover:text-amber-400 text-sm font-medium transition-colors", children: link.label }, link.href))) }))] }));
}
