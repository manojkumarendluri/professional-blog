import { ArrowLeft, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Photography() {
  const photos = [
    { src: '/placeholder-photo1.jpg', alt: 'Landscape photo 1', caption: 'Sunset over mountains' },
    { src: '/placeholder-photo2.jpg', alt: 'Street photo 1', caption: 'City street scene' },
    { src: '/placeholder-photo3.jpg', alt: 'Nature photo 1', caption: 'Forest trail' },
    { src: '/placeholder-photo4.jpg', alt: 'Portrait photo 1', caption: 'Candid moment' },
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
            <Camera className="text-amber-500" size={32} />
            <h1 className="text-4xl font-bold text-slate-900">Photography</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Capturing the beauty of the world through my lens. From landscapes to street photography,
            each image tells a story and preserves a moment in time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500 text-sm">Photo Placeholder</span>
              </div>
              <div className="p-4">
                <p className="text-slate-700 font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About My Photography</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Photography has been my passion for several years. I enjoy exploring different genres,
            from the tranquility of nature landscapes to the energy of urban street scenes.
            Each photograph is an opportunity to see the world differently and share those perspectives.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I use both digital and film cameras, and I'm always experimenting with composition,
            lighting, and post-processing techniques to bring out the best in each image.
          </p>
        </div>
      </div>
    </div>
  )
}