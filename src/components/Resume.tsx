import { Briefcase, GraduationCap, Award, Download } from 'lucide-react'

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
]

const skills = [
  { category: 'Automation Tools', items: ['Selenium WebDriver', 'Appium', 'Playwright', 'TestNG', 'Maven'] },
  { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'PL/SQL', 'C'] },
  { category: 'AI & Modernization', items: ['AI Autocoder', 'AI Static Template Analysis', 'ChatGPT-driven Testing'] },
  { category: 'Tools & DevOps', items: ['Jira', 'Postman', 'Jenkins', 'Git/GitHub', 'Docker'] },
]

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
            href="/Manojkumar_Endluri_-_SDET_Resume.pdf"
            download
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
                    <p className="text-amber-600 text-sm font-medium">VEMU Institute of Technology / JNTU Anantapur</p>
                  </div>
                  <p className="text-slate-500 text-sm">2013 – 2017</p>
                </div>
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
                <li>› Selenium WebDriver with Java</li>
                <li>› API Testing with Postman</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Languages</h4>
              {[{ lang: 'English', level: 'Professional' }, { lang: 'Telugu', level: 'Native' }, { lang: 'Hindi', level: 'Conversational' }].map(l => (
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
  )
}
