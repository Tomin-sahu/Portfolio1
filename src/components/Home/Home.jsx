import React from 'react'
import Navbar from '../Navbar/Navbar'
import HomeBgImg from '../../assets/home_bg_img1.jpg'
import './Home.css'

import About from '../About/About'
import Experience from '../Experience/Experience'
import Services from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Footer from '../Footer1/Footer'


function Home(){

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Tomin_Sahu_CV.pdf'; // Relative path to the CV file
        link.download = 'Tomin_Sahu_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <Navbar/>

        {/* ======================= Home Page ====================== */}
        <main className='site-main'>
            <section className='site-banner site-banner1'>
                <div className="container">
                    <div className="row home-margin">
                        <div className="col-lg-6 col-md-12 site-title">
                            <h3 className='title-text cstm-margin'>Hey</h3>
                            <h1 className='title-text text-uppercase cstm-margin'>I am Tomin Sahu</h1>
                            <h5 className='title-text text-uppercase cstm-margin'>Web Developer</h5>
                            <div className="site-button">
                                <div className="d-flex flex-row flex-wrap">
                                    <button className=' btn mr-4 button primary-button text-uppercase cstm-margin'>Hire Me</button>
                                    <button className='btn button secondary-button text-uppercase cstm-margin' onClick={handleDownload}>Get CV</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 banner-image">
                            <img src={HomeBgImg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <hr className='HrTag' />


            {/* ======================= About Page ====================== */}
            
            <About/>
            <hr className='HrTag' />

            {/* ======================= Experience Page ====================== */}

            <Experience/>
            <hr className='HrTag' />
           
           {/* ======================= Services Page ====================== */}

            <Services/>
            <hr className='HrTag' />

          {/* ======================= Projects Page ====================== */}

          <Projects/>
          <hr className='HrTag' />

          {/* =======================Footer Page ====================== */}

          <Footer/>

        </main>
        </>
    )
}

export default Home