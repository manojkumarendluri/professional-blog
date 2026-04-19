import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Photography from './components/Photography'
import Travelling from './components/Travelling'
import ShortStoryWriting from './components/ShortStoryWriting'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/travelling" element={<Travelling />} />
      <Route path="/short-story-writing" element={<ShortStoryWriting />} />
    </Routes>
  )
}
