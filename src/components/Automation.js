import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle, Layers, Globe, Smartphone, Database, GitBranch } from 'lucide-react';
const frameworks = [
    { icon: Globe, label: 'Web Automation', desc: 'Selenium & Playwright-based frameworks for cross-browser E2E testing.' },
    { icon: Smartphone, label: 'Mobile Testing', desc: 'Appium suites for Android & iOS native and hybrid app validation.' },
    { icon: Database, label: 'API Testing', desc: 'REST & GraphQL API validation with Postman and SQL assertions.' },
    { icon: GitBranch, label: 'CI/CD Integration', desc: 'Jenkins & GitHub Actions pipelines with automated test gates.' },
    { icon: Layers, label: 'Data-Driven Testing', desc: 'Apache POI and Pandas-powered parameterized test execution.' },
    { icon: CheckCircle, label: 'AI-Driven Analysis', desc: 'ChatGPT-powered static analysis and template validation.' },
];
const metrics = [
    { label: '2000+ Test Cases', value: 'Automated' },
    { label: '60% Efficiency Gain', value: 'Automation ROI' },
    { label: '95%+ Coverage', value: 'Test Automation' },
    { label: '500+ Defects', value: 'Prevented Early' },
];
export default function Automation() {
    return (_jsx("section", { id: "automation", className: "py-24 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-start", children: [_jsxs("div", { children: [_jsx("p", { className: "text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2", children: "Core Expertise" }), _jsx("h2", { className: "text-4xl font-bold text-slate-900 mb-5", children: "E2E Automation Frameworks" }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-6", children: "With over 5 years in QA automation, I specialize in building scalable test infrastructure across web, mobile, and API platforms. Expert in Java-Selenium and Python-Selenium frameworks, bridging the gap between manual precision and automation efficiency." }), _jsx("p", { className: "text-slate-600 leading-relaxed mb-8", children: "Experienced with Appium for mobile automation, Postman for API testing, and SQL for database verification. Strong foundation in Page Object Model (POM), data-driven testing, and CI/CD integration." }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: metrics.map(m => (_jsxs("div", { className: "bg-slate-50 rounded-xl p-5 border border-slate-100", children: [_jsx("p", { className: "text-amber-500 font-bold mb-1", children: m.label }), _jsx("p", { className: "text-slate-500 text-sm", children: m.value })] }, m.label))) })] }), _jsx("div", { children: _jsx("div", { className: "grid gap-4", children: frameworks.map(fw => {
                                    const Icon = fw.icon;
                                    return (_jsxs("div", { className: "flex items-start gap-4 p-5 border border-slate-100 rounded-xl hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200 group", children: [_jsx("div", { className: "w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors", children: _jsx(Icon, { size: 18, className: "text-amber-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-slate-900 text-sm mb-1", children: fw.label }), _jsx("p", { className: "text-slate-500 text-sm", children: fw.desc })] })] }, fw.label));
                                }) }) })] }), _jsxs("div", { className: "mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white", children: [_jsx("h3", { className: "font-bold text-lg mb-6 text-amber-400", children: "Technical Proficiency" }), _jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-6", children: [
                                { skill: 'Selenium / Appium', level: 95 },
                                { skill: 'Java / TestNG', level: 92 },
                                { skill: 'Python Automation', level: 85 },
                                { skill: 'API Testing', level: 88 },
                            ].map(s => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { className: "text-slate-300", children: s.skill }), _jsxs("span", { className: "text-amber-400 font-semibold", children: [s.level, "%"] })] }), _jsx("div", { className: "h-1.5 bg-slate-700 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full", style: { width: `${s.level}%` } }) })] }, s.skill))) })] })] }) }));
}
