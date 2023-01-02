import React from 'react'
import { BiMailSend, BiMap, BiPhone,} from "react-icons/bi";

const Wrapper = () => {
    return (
        <>
            <section className='text-bg-dark bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='text-center col-6 col-md-4 p-5'>
                            <div>
                                <h3 className='text-white'>Contact</h3>
                                <h5 className='text-black'><BiMap className='m-2' id='icon'/>Baja California, Mexico</h5>
                                <h5 className='text-black'><BiMailSend className='m-2'  id='icon'/>davamaju24@gmail.com</h5>
                                <h5 className='text-black'><BiPhone className='m-2'  id='icon'/>646 260 86 95</h5>
                                <a href='/' className='text-white'>Hire me</a>
                            </div>
                        </div>
                        <div className='text-center p-5 col-sm-6 col-md-8'>
                            <div>
                                <h3 className='text-white'>Experience in Frontend and ui design</h3>
                                <p className='text-black'>I work with React js and libraries for each of the projects as well as enjoying the challenges and works that encourage teamwork </p>
                                <div className='wrapper'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wrapper
