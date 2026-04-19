import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Camera, MapPin, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
const interests = [
    {
        icon: Camera,
        name: 'Photography',
        tag: 'Hobby',
        description: 'Capturing moments and landscapes through the lens. Exploring the art of visual storytelling and the beauty of everyday scenes.',
        features: ['Landscape photography', 'Street photography', 'Nature shots', 'Photo editing'],
        color: 'bg-blue-50 border-blue-100',
        iconColor: 'text-blue-600 bg-blue-100',
        tagColor: 'text-blue-700 bg-blue-100',
        path: '/photography',
    },
    {
        icon: MapPin,
        name: 'Travelling',
        tag: 'Adventure',
        description: 'Exploring new places, cultures, and experiences. From mountain treks to city explorations, discovering the world one journey at a time.',
        features: ['Adventure travel', 'Cultural exploration', 'Nature trips', 'City tours'],
        color: 'bg-green-50 border-green-100',
        iconColor: 'text-green-600 bg-green-100',
        tagColor: 'text-green-700 bg-green-100',
        path: '/travelling',
    },
    {
        icon: PenTool,
        name: 'Short Story Writing',
        tag: 'Creative',
        description: 'Crafting short stories that explore human emotions, experiences, and imagination. Writing as a way to express thoughts and connect with readers.',
        features: ['Fiction writing', 'Creative storytelling', 'Character development', 'Narrative techniques'],
        color: 'bg-purple-50 border-purple-100',
        iconColor: 'text-purple-600 bg-purple-100',
        tagColor: 'text-purple-700 bg-purple-100',
        path: '/short-story-writing',
    },
];
export default function PersonalInterests() {
    return (_jsx("section", { id: "personal-interests", className: "py-24 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2", children: "Beyond Work" }), _jsx("h2", { className: "text-4xl font-bold text-slate-900 mb-4", children: "Personal Interests" }), _jsx("p", { className: "text-slate-500 max-w-xl mx-auto text-base", children: "Exploring creativity and adventure outside of professional life. Click on each interest to learn more." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: interests.map(interest => {
                        const Icon = interest.icon;
                        return (_jsxs(Link, { to: interest.path, className: `border rounded-2xl p-6 ${interest.color} group hover:shadow-lg transition-all duration-300 cursor-pointer block`, children: [_jsxs("div", { className: "flex items-start justify-between mb-5", children: [_jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center ${interest.iconColor}`, children: _jsx(Icon, { size: 22 }) }), _jsx("span", { className: `text-xs font-semibold px-3 py-1 rounded-full ${interest.tagColor}`, children: interest.tag })] }), _jsx("h3", { className: "text-lg font-bold text-slate-900 mb-3", children: interest.name }), _jsx("p", { className: "text-slate-600 text-sm leading-relaxed mb-5", children: interest.description }), _jsx("div", { className: "space-y-2 mb-6", children: interest.features.map(f => (_jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-600", children: [_jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" }), f] }, f))) }), _jsx("div", { className: "text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors", children: "Explore \u2192" })] }, interest.name));
                    }) })] }) }));
}
