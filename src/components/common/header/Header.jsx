import React from 'react'
import About from '../../pages/About'

const Header = () => {
    return (
        <>
            <section className=''>
                <nav className='navbar navbar-expand-sm navbar-dark bg-primary fixed-top pr-5'>
                    <div className='container-fluid'>
                        <a className='navbar-brand display-2 m-2' href="/">Dayana</a>
                        <button class='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id="navbarColor01">
                            <ul className='navbar-nav mx-5'>
                                <li className='nav-item'>
                                    <a className='nav-link active' href="/">Home
                                        <span className='visually-hidden'>(current)</span>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="<About/>">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="/">Portfolio</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header
