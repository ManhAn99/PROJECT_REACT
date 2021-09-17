import React from 'react'
import Anouncement from '../components/Anouncement'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Homepage = () => {
    return (
        <div>
            <Anouncement />
            <Navbar />
            <Slider />
            <Category />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Homepage
