import { Camera, MapPin, PenTool } from 'lucide-react'
import { Link } from 'react-router-dom'

const interests = [
  {
    icon: Camera,
    name: 'Photography',
    tag: 'Hobby',
    description:
      'Capturing moments and landscapes through the lens. Exploring the art of visual storytelling and the beauty of everyday scenes.',
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
    description:
      'Exploring new places, cultures, and experiences. From mountain treks to city explorations, discovering the world one journey at a time.',
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
    description:
      'Crafting short stories that explore human emotions, experiences, and imagination. Writing as a way to express thoughts and connect with readers.',
    features: ['Fiction writing', 'Creative storytelling', 'Character development', 'Narrative techniques'],
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600 bg-purple-100',
    tagColor: 'text-purple-700 bg-purple-100',
    path: '/short-story-writing',
  },
]

export default function PersonalInterests() {
  return (
    <section id="personal-interests" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Beyond Work</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Personal Interests</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Exploring creativity and adventure outside of professional life. Click on each interest to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map(interest => {
            const Icon = interest.icon
            return (
              <Link
                key={interest.name}
                to={interest.path}
                className={`border rounded-2xl p-6 ${interest.color} group hover:shadow-lg transition-all duration-300 cursor-pointer block`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${interest.iconColor}`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${interest.tagColor}`}>{interest.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{interest.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{interest.description}</p>
                <div className="space-y-2 mb-6">
                  {interest.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  Explore →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}