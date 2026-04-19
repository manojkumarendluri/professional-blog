import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ShortStoryWriting() {
    const stories = [
        {
            title: 'The Forgotten Letter',
            genre: 'Drama',
            excerpt: 'In a dusty attic, Sarah discovered a letter that would change everything she thought she knew about her family...',
            wordCount: 1200,
        },
        {
            title: 'Midnight Train',
            genre: 'Mystery',
            excerpt: 'The train rattled through the night, carrying secrets that some passengers would do anything to keep hidden...',
            wordCount: 950,
        },
        {
            title: 'Echoes of Yesterday',
            genre: 'Romance',
            excerpt: 'Time may pass, but some memories refuse to fade. When old friends reunite, buried feelings resurface...',
            wordCount: 1100,
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-slate-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 py-12", children: [_jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors", children: [_jsx(ArrowLeft, { size: 16 }), "Back to Homepage"] }), _jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(PenTool, { className: "text-amber-500", size: 32 }), _jsx("h1", { className: "text-4xl font-bold text-slate-900", children: "Short Story Writing" })] }), _jsx("p", { className: "text-slate-600 max-w-2xl mx-auto", children: "Crafting stories that explore the depths of human experience. Each tale is a journey into imagination, emotion, and the complexities of life." })] }), _jsx("div", { className: "grid md:grid-cols-1 gap-8 mb-12", children: stories.map((story, index) => (_jsxs("div", { className: "bg-white rounded-lg p-6 shadow-md", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 mb-1", children: story.title }), _jsx("span", { className: "text-amber-500 text-sm font-medium", children: story.genre })] }), _jsxs("span", { className: "text-slate-500 text-sm", children: [story.wordCount, " words"] })] }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: story.excerpt }), _jsx("button", { className: "text-amber-500 hover:text-amber-600 font-medium transition-colors", children: "Read Full Story \u2192" })] }, index))) }), _jsxs("div", { className: "bg-white rounded-lg p-8 shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "About My Writing" }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "Writing has always been my way of processing the world around me. Through short stories, I explore themes of love, loss, identity, and human connection. Each story begins with a simple idea or emotion and grows into something that hopefully resonates with readers." }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "I draw inspiration from everyday observations, personal experiences, and the endless possibilities of \"what if\" scenarios. My writing style focuses on character development, emotional depth, and creating immersive worlds within the constraints of short fiction." }), _jsxs("div", { className: "grid md:grid-cols-4 gap-4 mt-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "25+" }), _jsx("div", { className: "text-slate-600 text-sm", children: "Stories Written" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "Drama" }), _jsx("div", { className: "text-slate-600 text-sm", children: "Favorite Genre" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "500+" }), _jsx("div", { className: "text-slate-600 text-sm", children: "Words/Day" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-amber-500", children: "2020" }), _jsx("div", { className: "text-slate-600 text-sm", children: "Started Writing" })] })] })] })] }) }));
}
