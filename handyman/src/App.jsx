import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { FeaturedService } from './components/FeaturedService'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServiceCategories } from './components/ServiceCategories'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <ServiceCategories />
      <FeaturedService />
      <About />
      <Contact />
    </>
  )
}

export default App
