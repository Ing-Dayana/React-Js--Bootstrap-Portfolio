import React from 'react'
import Typewriter from 'typewriter-effect';
import CTA from './CTA'
import CV from './cvitae.pdf'

const Hero = () => {
    return (
        <>
            <section className='banner'>
                <div className='container p-5'>
                    <div className='heroContainer py-5'>
                        <h3 className='display-5 text-white pt-5'>Hello I'M</h3>
                    </div>
                    <h1 className='display-3 text-warning fw-bold' ><Typewriter options={{
                        strings: ['Dayana Martinez', 'WEB DEVELOPMENT', 'UI / UX DESIGNER', 'WEB DESIGNER'],
                        autoStart: true,
                        loop: true,
                    }}/></h1>
                    <div className='p-2'>
                        <button className='btn btn-primary btn-outline-warning m-2'  type="button"><a className='text-white text-decoration-none' href='/'>Hire me</a></button>
                        <button className='btn btn-primary btn-outline-warning' type="button"><a className='text-white fw-bold text-decoration-none' href={CV} download>Downloand CV</a></button>
                    </div>
                    <div className='hero-header'></div>
                </div>
            </section>
        </>
    )
}

export default Hero
