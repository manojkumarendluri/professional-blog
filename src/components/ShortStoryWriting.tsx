import { ArrowLeft, PenTool } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PenTool className="text-amber-500" size={32} />
            <h1 className="text-4xl font-bold text-slate-900">Short Story Writing</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Crafting stories that explore the depths of human experience. Each tale is a journey
            into imagination, emotion, and the complexities of life.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{story.title}</h3>
                  <span className="text-amber-500 text-sm font-medium">{story.genre}</span>
                </div>
                <span className="text-slate-500 text-sm">{story.wordCount} words</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{story.excerpt}</p>
              <button className="text-amber-500 hover:text-amber-600 font-medium transition-colors">
                Read Full Story →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About My Writing</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Writing has always been my way of processing the world around me. Through short stories,
            I explore themes of love, loss, identity, and human connection. Each story begins with
            a simple idea or emotion and grows into something that hopefully resonates with readers.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            I draw inspiration from everyday observations, personal experiences, and the endless
            possibilities of "what if" scenarios. My writing style focuses on character development,
            emotional depth, and creating immersive worlds within the constraints of short fiction.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">25+</div>
              <div className="text-slate-600 text-sm">Stories Written</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">Drama</div>
              <div className="text-slate-600 text-sm">Favorite Genre</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">500+</div>
              <div className="text-slate-600 text-sm">Words/Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">2020</div>
              <div className="text-slate-600 text-sm">Started Writing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}