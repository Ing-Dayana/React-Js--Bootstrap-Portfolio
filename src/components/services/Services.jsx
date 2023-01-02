import React from 'react'
import ImgServices from '../services/img1.png'
import ImgServices2 from '../services/img2.png'


console.log(ImgServices);

function Services() {
    return (
        <>
            <section className='container services pb-5' >
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <div className='p-5'>
                            <img className='img-fluid about-img img-about2' src={ImgServices2} alt="Logo2" />
                            <img className='img-fluid about-img img-about' src={ImgServices} alt="Logo" />
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5' id='col'>
                        <div className='about-text container'>
                            <h5>ABOUT ME</h5>
                            <h2>FRONT END DEVELOPMENT AND UI DESIGNER</h2>
                            <p className='p-0 text-black'>Hi, I'm Dayana Martinez and I'm an industrial engineer with experience in the electronics industry and with at least two years of experience in interface design and FrontEnd development.
                                I have high knowledge of pages with React Js and Bootstrap.
                                as well as a projects that supports my knowledge in other languages, libraries and frameworks for front end development
                            </p>
                            <p className='text-black'>
                                Industrial engineer with two years of experience in industrial electronics and one year of experience in selling web pages on a freelance basis.
                                Ready to apply my passion for coding to a talented engineering team to develop quality solutions.
                            </p>
                            <a href='/' className='btn btn-dark'>See more</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

