import React from 'react'
import Home from '../home/Home';
import About from './About';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio'
import Wrapper from '../wrapper/Wrapper'
import Footer from '../footer/Footer'

const PageContent = () => {
    return(
        <>
            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <Wrapper/>
            <Footer/>
        </>
    )
    
}

export default PageContent

