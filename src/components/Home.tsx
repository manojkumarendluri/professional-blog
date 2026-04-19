import Nav from './Nav'
import Hero from './Hero'
import Resume from './Resume'
import AITools from './AITools'
import Automation from './Automation'
import PersonalInterests from './PersonalInterests'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <Hero />
      <Resume />
      <AITools />
      <Automation />
      <PersonalInterests />
      <Contact />
      <Footer />
    </div>
  )
}