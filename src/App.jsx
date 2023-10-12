import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import AvailableVehicleModels from './pages/availableVehicleModels/AvailableVehicleModels'
import Contact from './pages/contact/Contact'
import OurTeam from './pages/ourTeam/OurTeam'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/models" element={<AvailableVehicleModels />} />
                    <Route path="/team" element={<OurTeam />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App