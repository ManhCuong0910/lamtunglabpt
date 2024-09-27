import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Popup from './components/Popup/Popup'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <div className="duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      {/* <TopProducts handleOrderPopup={handleOrderPopup} /> */}
      <Banner />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
