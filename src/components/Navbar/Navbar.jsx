import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo4.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header className="header_area">
                <div className="main-menu">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src={logo} alt="" className='Navlogo' /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                {/* <div className="mr-auto"></div> */}
                                <ul class="navbar-nav">
                                    <li class="nav-item" className='nav-item1'>
                                        <Link class="nav-link active fs-5" className='nav-link1' aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">About</a>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">Services</a>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">Portfolio</a>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">Pages</a>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">Blog</a>
                                    </li>
                                    <li class="nav-item" className='nav-item1'>
                                        <a class="nav-link fs-5" className='nav-link1' href="#">Contact</a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar


