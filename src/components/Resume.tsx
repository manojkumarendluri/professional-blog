import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

const experience = [
  {
    role: 'Senior QA Automation Engineer',
    company: 'Current Employer',
    period: '2022 – Present',
    location: 'Chennai, India',
    points: [
      'Led solo QA automation operations including production reviews and AI static template analysis.',
      'Designed and maintained end-to-end test frameworks using Selenium & Playwright.',
      'Integrated AI-assisted test generation pipelines, reducing manual effort by 60%.',
      'Managed Salesforce CRM testing with Appium for mobile validation layers.',
    ],
  },
  {
    role: 'QA Automation Engineer',
    company: 'Previous Employer',
    period: '2019 – 2022',
    location: 'Chennai, India',
    points: [
      'Built Python-based automation suites covering web, API, and desktop apps.',
      'Developed data-driven test frameworks using Pandas for parameterized test execution.',
      'Collaborated with dev teams to embed QA gates into CI/CD pipelines.',
      'Mentored junior QA engineers in scripting and framework best practices.',
    ],
  },
];

const skills = [
  { category: 'Test Automation', items: ['Selenium', 'Playwright', 'Appium', 'TestNG', 'PyTest'] },
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript'] },
  { category: 'AI & Data', items: ['Pandas', 'Scikit-learn', 'OpenAI API', 'Prompt Engineering'] },
  { category: 'Tools & Platforms', items: ['Salesforce', 'JIRA', 'Git', 'Jenkins', 'Docker'] },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Professional Profile</p>
            <h2 className="text-4xl font-bold text-slate-900">Resume</h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            <Download size={15} /> Download CV
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={20} className="text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Work Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-amber-200">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-900">{exp.role}</h4>
                        <p className="text-amber-600 text-sm font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-500 text-sm">{exp.period}</p>
                        <p className="text-slate-400 text-xs">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-slate-600 text-sm flex gap-2">
                          <span className="text-amber-400 mt-1 flex-shrink-0">›</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={20} className="text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="relative pl-6 border-l-2 border-amber-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">B.Tech — Electronics & Communication Engineering</h4>
                    <p className="text-amber-600 text-sm font-medium">Anna University, Chennai</p>
                  </div>
                  <p className="text-slate-500 text-sm">2015 – 2019</p>
                </div>
                <p className="text-slate-600 text-sm mt-2">Graduated with a strong foundation in signal processing, embedded systems, and programming — bridging hardware intuition with software precision.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={20} className="text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Skills</h3>
              </div>
              <div className="space-y-5">
                {skills.map(group => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(item => (
                        <span key={item} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-6">
              <h4 className="font-semibold mb-4 text-amber-400">Certifications</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>› ISTQB Certified Tester — Foundation Level</li>
                <li>› Selenium WebDriver with Python</li>
                <li>› Salesforce Administrator (in progress)</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Languages</h4>
              {[{ lang: 'English', level: 'Professional' }, { lang: 'Telugu', level: 'Native' }, { lang: 'Tamil', level: 'Conversational' }].map(l => (
                <div key={l.lang} className="flex justify-between text-sm mb-2">
                  <span className="text-slate-700">{l.lang}</span>
                  <span className="text-amber-600 font-medium">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
