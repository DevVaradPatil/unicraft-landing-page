import './App.css'
import './satoshi.css'
import Header from './components/Header'
import Recents from './components/Recents'
import HowItWorks from './components/HowItWorks'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import GoToTopButton from './components/GoToTopButton'

function App() {

  return (
    <div className='flex justify-center items-center flex-col'>
      <GoToTopButton/>
      <Header />
      <Recents />
      <HowItWorks />
      <Quote />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
