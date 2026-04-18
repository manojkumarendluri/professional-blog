import { Camera, PenLine, ArrowRight } from 'lucide-react';

const photos = [
  'https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const stories = [
  {
    title: "Nature's Resilience",
    excerpt: 'A metaphorical journey through a forest after a storm — how nature quietly rebuilds, mirroring our own capacity to recover and grow after adversity.',
    category: 'Nature · Reflection',
    readTime: '4 min read',
  },
  {
    title: 'The Last Test Run',
    excerpt: 'A fictional tale of a lone QA engineer who discovers a bug that could unravel an entire financial system — with only hours before go-live.',
    category: 'Tech Fiction · Thriller',
    readTime: '6 min read',
  },
  {
    title: 'Chennai at Dawn',
    excerpt: 'A quiet visual narrative told through words — the city before it wakes, its rhythm, its silent conversations between street and sky.',
    category: 'City Life · Poetry',
    readTime: '3 min read',
  },
];

export default function Creative() {
  return (
    <section id="creative" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">Beyond the Terminal</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Creative Side</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Code is one language. I also speak through a camera lens and the written word.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center">
                <Camera size={18} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Photography</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              I find patterns in nature the same way I find patterns in code. My photography focuses on landscapes, wildlife, and the quiet drama of everyday moments — mostly around Chennai and surrounding hill stations.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {photos.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={src}
                    alt={`Photography ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Landscape', 'Nature', 'Street', 'Portrait', 'Macro'].map(tag => (
                <span key={tag} className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center">
                <PenLine size={18} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Story Writing</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Stories let me explore what code cannot fully express — emotion, tension, and the human side of technology. I write short fiction, tech narratives, and reflective prose that bridges the engineering world with everyday life.
            </p>
            <div className="space-y-4">
              {stories.map((story, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-xl p-5 hover:border-amber-200 hover:shadow-sm transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-amber-600 font-semibold">{story.category}</span>
                    <span className="text-xs text-slate-400">{story.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{story.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{story.excerpt}</p>
                  <div className="flex items-center gap-1 mt-3 text-amber-500 text-xs font-semibold">
                    Read Story <ArrowRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
