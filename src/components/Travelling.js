import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Travelling() {
    const destinations = [
        {
            name: 'Mountain Trek',
            location: 'Himalayas, India',
            description: 'An unforgettable journey through the majestic Himalayas, experiencing the raw beauty of nature.',
            highlights: ['Scenic trails', 'Local culture', 'Wildlife sightings', 'Stargazing'],
        },
        {
            name: 'City Exploration',
            location: 'Tokyo, Japan',
            description: 'Immersing in the vibrant culture and technology of Tokyo, from traditional temples to neon-lit streets.',
            highlights: ['Cultural sites', 'Modern architecture', 'Street food', 'Nightlife'],
        },
        {
            name: 'Beach Paradise',
            location: 'Maldives',
            description: 'Relaxing in the crystal-clear waters and white-sand beaches of the Maldives.',
            highlights: ['Snorkeling', 'Water sports', 'Sunset views', 'Luxury resorts'],
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-slate-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 py-12", children: [_jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors", children: [_jsx(ArrowLeft, { size: 16 }), "Back to Homepage"] }), _jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(MapPin, { className: "text-amber-500", size: 32 }), _jsx("h1", { className: "text-4xl font-bold text-slate-900", children: "Travelling Adventures" })] }), _jsx("p", { className: "text-slate-600 max-w-2xl mx-auto", children: "Exploring the world and collecting memories from every corner. Travel is not just about visiting places, but about understanding cultures and creating unforgettable experiences." })] }), _jsx("div", { className: "grid md:grid-cols-1 gap-8 mb-12", children: destinations.map((dest, index) => (_jsxs("div", { className: "bg-white rounded-lg overflow-hidden shadow-md", children: [_jsx("div", { className: "aspect-video bg-slate-200 flex items-center justify-center", children: _jsxs("span", { className: "text-slate-500 text-sm", children: ["Video Placeholder - ", dest.name] }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: dest.name }), _jsx("p", { className: "text-amber-500 font-medium mb-3", children: dest.location }), _jsx("p", { className: "text-slate-600 mb-4", children: dest.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: dest.highlights.map((highlight, i) => (_jsx("span", { className: "bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full", children: highlight }, i))) })] })] }, index))) }), _jsxs("div", { className: "bg-white rounded-lg p-8 shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Travel Philosophy" }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "For me, travel is about more than just sightseeing. It's about connecting with different cultures, trying new foods, learning local customs, and stepping outside my comfort zone. Every journey teaches me something new about the world and myself." }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "I believe in sustainable travel practices and aim to minimize my environmental impact while maximizing positive cultural exchanges. Whether it's hiking through mountains, exploring ancient cities, or relaxing on pristine beaches, each experience enriches my life." }), _jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "15+" }), _jsx("div", { className: "text-slate-600", children: "Countries Visited" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "50+" }), _jsx("div", { className: "text-slate-600", children: "Cities Explored" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "100+" }), _jsx("div", { className: "text-slate-600", children: "Memories Created" })] })] })] })] }) }));
}
