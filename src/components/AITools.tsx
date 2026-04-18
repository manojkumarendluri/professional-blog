import { Cpu, Mail, FileText, ExternalLink, Github } from 'lucide-react';

const tools = [
  {
    icon: Cpu,
    name: 'Auto Code Generator',
    tag: 'AI / Python',
    description:
      'An intelligent code generation tool powered by OpenAI that takes natural language descriptions and produces clean, production-ready Python or JavaScript code snippets. Includes syntax validation and automatic docstring generation.',
    features: ['Natural language to code', 'Multi-language support', 'Syntax validation', 'Docstring auto-gen'],
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600 bg-blue-100',
    tagColor: 'text-blue-700 bg-blue-100',
  },
  {
    icon: Mail,
    name: 'Gmail Generator',
    tag: 'AI / Automation',
    description:
      'Smart email drafting assistant that generates professional, context-aware Gmail templates from bullet-point inputs. Supports tone selection (formal, casual, persuasive) and integrates with Gmail API for direct sending.',
    features: ['Tone customization', 'Gmail API integration', 'Template library', 'Subject line suggestions'],
    color: 'bg-red-50 border-red-100',
    iconColor: 'text-red-500 bg-red-100',
    tagColor: 'text-red-700 bg-red-100',
  },
  {
    icon: FileText,
    name: 'Test Case Generator',
    tag: 'QA / AI',
    description:
      'Automated test case creation tool that analyzes user stories or feature descriptions to generate comprehensive test scenarios — covering positive, negative, edge, and boundary cases. Outputs to Excel or JIRA-ready format.',
    features: ['User story analysis', 'BDD Gherkin format', 'Edge case coverage', 'Excel / JIRA export'],
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-green-600 bg-green-100',
    tagColor: 'text-green-700 bg-green-100',
  },
];

export default function AITools() {
  return (
    <section id="ai-tools" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Built with Intelligence</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">AI-Powered Tools</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Tools I designed and built that combine QA expertise with modern AI capabilities to solve real engineering problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map(tool => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className={`border rounded-2xl p-6 ${tool.color} group hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.iconColor}`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tool.tagColor}`}>{tool.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{tool.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{tool.description}</p>
                <div className="space-y-2 mb-6">
                  {tool.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ursmanoj56"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <Github size={13} /> Source
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2">Tech Behind the Tools</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {['OpenAI GPT-4', 'Python 3.11', 'FastAPI', 'Gmail API', 'Pandas', 'Tkinter', 'Openpyxl', 'Requests'].map(tech => (
              <span key={tech} className="bg-slate-800 text-slate-300 text-sm px-4 py-1.5 rounded-full border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
