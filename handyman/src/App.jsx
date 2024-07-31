import './App.css'
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
    </>
  )
}

export default App
