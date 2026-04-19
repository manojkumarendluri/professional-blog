import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
const experience = [
    {
        role: 'Senior Quality Engineer',
        company: 'Moving Walls',
        period: 'Feb 2025 – Present',
        location: 'Chennai, India',
        points: [
            'Leading E2E quality assurance for global e-commerce marketplaces and media owner platforms.',
            'Architected AI Autocoder software to automate complex scripting tasks and improve team productivity.',
            'Conducting production document reviews and AI-driven static template analysis for deployment verification.',
            'Directing Agile Sprint management with task allocation and bug tracking for multi-platform projects.',
        ],
    },
    {
        role: 'Software Test Engineer',
        company: 'Vanigam Software Services',
        period: 'Apr 2024 – Jan 2025',
        location: 'Chennai, India',
        points: [
            'Managed comprehensive QA lifecycles for robust software products ensuring high-standard delivery.',
            'Executed advanced API testing with Postman and performed backend validation using SQL.',
            'Optimized test suite performance and maintained 95%+ automation coverage.',
        ],
    },
    {
        role: 'Test Engineer',
        company: 'Advik Solutions Pvt. Ltd.',
        period: 'Dec 2022 – Apr 2024',
        location: 'Bengaluru, India',
        points: [
            'Developed and maintained mobile automation frameworks using Appium and Java for Android/iOS platforms.',
            'Implemented Page Object Model (POM) element libraries to increase script reusability by 40%.',
            'Managed regression, smoke, and functional test cycles for major web applications.',
        ],
    },
    {
        role: 'Test Engineer',
        company: 'IOTinterCON',
        period: 'Nov 2019 – Feb 2021',
        location: 'Bengaluru, India',
        points: [
            'Engineered automation scripts using Selenium WebDriver and TestNG for Amazon.com.',
            'Performed data-driven testing and cross-browser result analysis using Apache POI.',
            'Developed comprehensive test documentation and test case management strategies.',
        ],
    },
];
const skills = [
    { category: 'Automation Tools', items: ['Selenium WebDriver', 'Appium', 'Playwright', 'TestNG', 'Maven'] },
    { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'PL/SQL', 'C'] },
    { category: 'AI & Modernization', items: ['AI Autocoder', 'AI Static Template Analysis', 'ChatGPT-driven Testing'] },
    { category: 'Tools & DevOps', items: ['Jira', 'Postman', 'Jenkins', 'Git/GitHub', 'Docker'] },
];
export default function Resume() {
    return (_jsx("section", { id: "resume", className: "py-24 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-14", children: [_jsxs("div", { children: [_jsx("p", { className: "text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2", children: "Professional Profile" }), _jsx("h2", { className: "text-4xl font-bold text-slate-900", children: "Resume" })] }), _jsxs("a", { href: "/Manojkumar_Endluri_-_SDET_Resume.pdf", download: true, className: "hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium", children: [_jsx(Download, { size: 15 }), " Download CV"] })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [_jsxs("div", { className: "md:col-span-2 space-y-10", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-6", children: [_jsx(Briefcase, { size: 20, className: "text-amber-500" }), _jsx("h3", { className: "text-xl font-bold text-slate-800", children: "Work Experience" })] }), _jsx("div", { className: "space-y-8", children: experience.map((exp, i) => (_jsxs("div", { className: "relative pl-6 border-l-2 border-amber-200", children: [_jsx("div", { className: "absolute -left-[9px] top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" }), _jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2 mb-2", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-slate-900", children: exp.role }), _jsx("p", { className: "text-amber-600 text-sm font-medium", children: exp.company })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-slate-500 text-sm", children: exp.period }), _jsx("p", { className: "text-slate-400 text-xs", children: exp.location })] })] }), _jsx("ul", { className: "mt-3 space-y-1", children: exp.points.map((pt, j) => (_jsxs("li", { className: "text-slate-600 text-sm flex gap-2", children: [_jsx("span", { className: "text-amber-400 mt-1 flex-shrink-0", children: "\u203A" }), pt] }, j))) })] }, i))) })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-6", children: [_jsx(GraduationCap, { size: 20, className: "text-amber-500" }), _jsx("h3", { className: "text-xl font-bold text-slate-800", children: "Education" })] }), _jsxs("div", { className: "relative pl-6 border-l-2 border-amber-200", children: [_jsx("div", { className: "absolute -left-[9px] top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" }), _jsxs("div", { className: "flex flex-wrap justify-between gap-2", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-slate-900", children: "B.Tech \u2014 Electronics & Communication Engineering" }), _jsx("p", { className: "text-amber-600 text-sm font-medium", children: "VEMU Institute of Technology / JNTU Anantapur" })] }), _jsx("p", { className: "text-slate-500 text-sm", children: "2013 \u2013 2017" })] })] })] })] }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-6", children: [_jsx(Award, { size: 20, className: "text-amber-500" }), _jsx("h3", { className: "text-xl font-bold text-slate-800", children: "Skills" })] }), _jsx("div", { className: "space-y-5", children: skills.map(group => (_jsxs("div", { children: [_jsx("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2", children: group.category }), _jsx("div", { className: "flex flex-wrap gap-2", children: group.items.map(item => (_jsx("span", { className: "bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium", children: item }, item))) })] }, group.category))) })] }), _jsxs("div", { className: "bg-slate-900 text-white rounded-xl p-6", children: [_jsx("h4", { className: "font-semibold mb-4 text-amber-400", children: "Certifications" }), _jsxs("ul", { className: "space-y-2 text-sm text-slate-300", children: [_jsx("li", { children: "\u203A ISTQB Certified Tester \u2014 Foundation Level" }), _jsx("li", { children: "\u203A Selenium WebDriver with Java" }), _jsx("li", { children: "\u203A API Testing with Postman" })] })] }), _jsxs("div", { className: "bg-amber-50 border border-amber-100 rounded-xl p-6", children: [_jsx("h4", { className: "font-semibold text-slate-800 mb-4", children: "Languages" }), [{ lang: 'English', level: 'Professional' }, { lang: 'Telugu', level: 'Native' }, { lang: 'Hindi', level: 'Conversational' }].map(l => (_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { className: "text-slate-700", children: l.lang }), _jsx("span", { className: "text-amber-600 font-medium", children: l.level })] }, l.lang)))] })] })] })] }) }));
}
