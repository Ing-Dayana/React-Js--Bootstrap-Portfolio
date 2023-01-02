import React from 'react'
import {BsGoogle, BsLinkedin, BsGithub, BsBehance, BsDribbble, BsPinterest} from "react-icons/bs";


const Footer = () => {
    return (
        <>
            <section>
                <div className='bg-primary pt-3'>
                <footer className='text-center text-white container'>
                <div className='container'>
                    <section className='mb-4'>
                        <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/dayana-v-mart%C3%ADnez-' role='button'
                            ><BsLinkedin/></a>
                        <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Ing-Dayana' role='button'
                            ><BsGithub/></a>
                        <a className='btn btn-outline-light btn-floating m-1' href="https://www.behance.net/vanessamartine12" role='button'
                            ><BsBehance/></a>
                        <a className='btn btn-outline-light btn-floating m-1' href="https://dribbble.com/Dayisjpg" role='button'
                            ><BsDribbble/></a>
                        <a className='btn btn-outline-light btn-floating m-1' href="https://www.pinterest.com.mx/IngDayanaMartinez/_created/" role='button'
                            ><BsPinterest/></a>
                    </section>
                </div>
                <div className='text-center p-3'>
                    © 2022 Copyright:
                    <a className='text-white' href="https://github.com/Ing-Dayana" target="blank">Dayana Ma</a>
                </div>
                </footer>
                </div>
            </section>
        </>
    )
}

export default Footer

