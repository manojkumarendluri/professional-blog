import { CheckCircle, Layers, Globe, Smartphone, Database, GitBranch } from 'lucide-react';

const frameworks = [
  { icon: Globe, label: 'Web Automation', desc: 'Selenium & Playwright-based frameworks for cross-browser E2E testing.' },
  { icon: Smartphone, label: 'Mobile Testing', desc: 'Appium suites for Android & iOS native and hybrid app validation.' },
  { icon: Database, label: 'API Testing', desc: 'REST & GraphQL API validation with Python Requests and schema assertions.' },
  { icon: GitBranch, label: 'CI/CD Integration', desc: 'Jenkins & GitHub Actions pipelines with automated test gates.' },
  { icon: Layers, label: 'Data-Driven Testing', desc: 'Pandas-powered parameterized test execution from Excel/CSV datasets.' },
  { icon: CheckCircle, label: 'AI Static Analysis', desc: 'Template-based AI-assisted static review for production test coverage.' },
];

const metrics = [
  { label: 'Test Cases Automated', value: '2,000+' },
  { label: 'Reduction in Manual Effort', value: '60%' },
  { label: 'Frameworks Built', value: '8+' },
  { label: 'Defects Prevented', value: '500+' },
];

export default function Automation() {
  return (
    <section id="automation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Core Expertise</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-5">Automation Experience</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              With over 5 years in QA automation, I specialize in building scalable test infrastructure from the ground up — owning the full lifecycle from framework design and CI integration to production quality gates.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              As a solo QA engineer, I have driven test strategy, maintained automation health, and ensured product stability across web, mobile, and API layers using Python, Java, and modern automation stacks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map(m => (
                <div key={m.label} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="text-3xl font-bold text-amber-500 mb-1">{m.value}</p>
                  <p className="text-slate-500 text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-4">
              {frameworks.map(fw => {
                const Icon = fw.icon;
                return (
                  <div
                    key={fw.label}
                    className="flex items-start gap-4 p-5 border border-slate-100 rounded-xl hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Icon size={18} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{fw.label}</h4>
                      <p className="text-slate-500 text-sm">{fw.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <h3 className="font-bold text-lg mb-6 text-amber-400">Current Stack Proficiency</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { skill: 'Selenium / Playwright', level: 95 },
              { skill: 'Python', level: 92 },
              { skill: 'Appium', level: 80 },
              { skill: 'Java / TestNG', level: 78 },
            ].map(s => (
              <div key={s.skill}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">{s.skill}</span>
                  <span className="text-amber-400 font-semibold">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
