import { ArrowLeft, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Travelling() {
  const destinations = [
    {
      name: 'Mountain Trek',
      location: 'Himalayas, India',
      description: 'An unforgettable journey through the majestic Himalayas, experiencing the raw beauty of nature.',
      highlights: ['Scenic trails', 'Local culture', 'Wildlife sightings', 'Stargazing'],
    },
    {
      name: 'City Exploration',
      location: 'Tokyo, Japan',
      description: 'Immersing in the vibrant culture and technology of Tokyo, from traditional temples to neon-lit streets.',
      highlights: ['Cultural sites', 'Modern architecture', 'Street food', 'Nightlife'],
    },
    {
      name: 'Beach Paradise',
      location: 'Maldives',
      description: 'Relaxing in the crystal-clear waters and white-sand beaches of the Maldives.',
      highlights: ['Snorkeling', 'Water sports', 'Sunset views', 'Luxury resorts'],
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
            <MapPin className="text-amber-500" size={32} />
            <h1 className="text-4xl font-bold text-slate-900">Travelling Adventures</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Exploring the world and collecting memories from every corner. Travel is not just about
            visiting places, but about understanding cultures and creating unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500 text-sm">Video Placeholder - {dest.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.name}</h3>
                <p className="text-amber-500 font-medium mb-3">{dest.location}</p>
                <p className="text-slate-600 mb-4">{dest.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((highlight, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Travel Philosophy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            For me, travel is about more than just sightseeing. It's about connecting with different
            cultures, trying new foods, learning local customs, and stepping outside my comfort zone.
            Every journey teaches me something new about the world and myself.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            I believe in sustainable travel practices and aim to minimize my environmental impact
            while maximizing positive cultural exchanges. Whether it's hiking through mountains,
            exploring ancient cities, or relaxing on pristine beaches, each experience enriches my life.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">15+</div>
              <div className="text-slate-600">Countries Visited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">50+</div>
              <div className="text-slate-600">Cities Explored</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">100+</div>
              <div className="text-slate-600">Memories Created</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}