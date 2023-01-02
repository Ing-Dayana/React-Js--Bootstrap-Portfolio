import React from 'react'
import Portfoli1 from './assets/portfolio1.png'
import Portfoli2 from './assets/portfolio2.png'
import Portfoli3 from './assets/portfolio3.png'
import Portfoli4 from './assets/portfolio4.png'
import Portfoli5 from './assets/portfolio5.png'
import Portfoli6 from './assets/portfolio6.png'


const Portfolio = () => {
    return (
        <>
            <section className='portfolio pt-5' id='portfolio'>
                <div className='container'> 
                    
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='text-center pb-5'>
                                <h3>Online Portfolio</h3>
                                <h2>Designer and developer in Front End </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-12 col-md-12 col-lg-4 py-2'>
                        <div className='card text-white text-center pb-2 bg-primary'>
                            <div className='card-body'></div>
                            <h3 className='card-title'>PROJECTS BOOTSTRAP</h3>
                            <img className='img-fluid' src={Portfoli1} alt='P-img'></img>
                            <p className='lead'>UI design and development of a website for a Bakery
                                Development with:
                                HTML, CSS, Javascript, Gsap, Animated and  Swiper Libraries,Bootstrap and standardized "Bootswatch" designs</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>

                    <div className='col-12 col-md-12 col-lg-4 py-2'>
                        <div className='card text-white text-center bg-primary pb-2'>
                            <div className='card-body'></div>
                            <h3 className='card-title'>PROJECTS ANGULAR</h3>
                            <img className='img-fluid' src={Portfoli2} alt='P-img'></img>
                            <p className='lead'>UI design and development of a website for a Bakery
                                Development with:
                                HTML, CSS, Javascript, Gsap, Animated and  Swiper Libraries,Bootstrap and standardized "Bootswatch" designs</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>

                    <div className='col-12 col-md-12 col-lg-4 py-2'>
                        <div className='card text-white text-center bg-primary pb-2'>
                            <div className='card-body'></div>
                            <h3 className='card-title'>PROJECTS REACT JS</h3>
                            <img className='img-fluid' src={Portfoli3} alt='P-img'></img>
                            <p className='lead'>UI design and development of a website for a Bakery
                                Development with:
                                HTML, CSS, Javascript, Gsap, Animated and  Swiper Libraries,Bootstrap and standardized "Bootswatch" designs</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-12 col-md-12 col-lg-4 py-2'>
                        <div className='card text-white text-center bg-primary pb-2'>
                            <div className='card-body'></div>
                            <h3 className='card-title'>PROJECTS UI UX DESIGN</h3>
                            <img className='img-fluid' src={Portfoli4} alt='P-img'></img>
                            <p className='lead'>Design and developed the website built on a solid foundation of UI UX in a responsive mannar with the help of the front end developer role. 
                                Click below (mobile prototype only)</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>

                    <div className='col-12 col-md-12 col-lg-4 py-2'>
                        <div className='card text-white text-center bg-primary pb-2'>
                            <div className='card-body'></div>
                            <h3 className='card-title'>PROJECTS SASS TAILWIND</h3>
                            <img className='img-fluid' src={Portfoli5} alt='P-img'></img>
                            <p className='lead'>UI design and development of a website for a Bakery
                                Development with:
                                HTML, CSS, Javascript, Gsap, Animated and  Swiper Libraries,Bootstrap and standardized "Bootswatch" designs</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>

                    <div className='col-12 col-md-12 col-lg-4 py-2 '>
                        <div className='card text-white text-center bg-primary pb-2 '>
                            <div className='card-body'></div>
                            <h3 className='card-title'>MORE PROJECTS</h3>
                            <img className='img-fluid' src={Portfoli6} alt='P-img'></img>
                            <p className='lead'>UI design and development of a website for a Bakery
                                Development with:
                                HTML, CSS, Javascript, Gsap, Animated and  Swiper Libraries,Bootstrap and standardized "Bootswatch" designs</p>
                        </div>
                        <div className='d-flex justify-content-around  bg-primary rounded mt-1'>
                            <a href="https://github.com/Ing-Dayana/BAKERY-Boostrapt-Web" target="blank" className='btn btn-warning m-2 text-dark'>Github</a>
                            <a href="https://ing-dayana.github.io/BAKERY-Boostrapt-Web/" target="blank" className='btn btn-warning m-2 text-dark'>See Demo</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
