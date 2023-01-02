import React from 'react'
import { BiDesktop } from "react-icons/bi";
import { BiLaptop } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";


const About = () => {
    return (
        <>
            <section className='bg-primary' id='about'>
                <section className='container card-body pb-5'>
                    <div className='row align-items-start'>
                        <div className='col text-center pt-5'>
                            <h1 className='text-white display-1'id='icon'><BiDesktop id='icon'/></h1>
                            <h3 className='text-white'>RESPONSIVE</h3>
                            <h5 className='text-white' >You want your website to be suitable for your needs</h5>
                        </div>
                        <div className='col text-center pt-5'>
                            <h1 className='text-white display-1' id='icon'><BiLaptop id='icon'/></h1>
                            <h3 className='text-white' >PERSONALIZED</h3>
                            <h5 className='text-white' >Design and make the page of your dreams come true</h5>
                        </div>
                        <div className='col text-center pt-5'>
                            <h1 className='text-white display-1'id='icon'><BiMobile id='icon'/></h1>
                            <h3 className='text-white'>FUNCTIONAL</h3>
                            <h5 className='text-white' >interact with your customers with 100% functionality of your store, portfolio and more</h5>
                        </div>
                    </div>
                </section>
            </section>
            
        </>
    )
}

export default About

