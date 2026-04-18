import Nav from './components/Nav';
import Hero from './components/Hero';
import Resume from './components/Resume';
import AITools from './components/AITools';
import Automation from './components/Automation';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <Hero />
      <Resume />
      <AITools />
      <Automation />
      <Creative />
      <Contact />
      <Footer />
    </div>
  );
}
