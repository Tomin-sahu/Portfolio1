import React from 'react'
// import Navbar from '../Navbar/Navbar'
import AboutImg from '../../assets/intro_logo.avif'
import './About.css'

function About(){
    // const handleDownload = () => {
    //     // Create a temporary anchor element
    //     const link = document.createElement('a');
    //     link.href = 'D:/Study_Materials/My_Own_Projects/My_Prortfolio_New/my_portfolio/src/assets/Tomin_Sahu_CV.pdf'; // Replace '/path/to/your/cv.pdf' with the actual path to your CV file
    //     link.download = 'Tomin_Sahu_CV.pdf'; // Specify the filename for the downloaded file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = process.env.PUBLIC_URL + '/Tomin_Sahu_CV.pdf'; // Relative path to the CV file
    //     link.download = 'Tomin_Sahu_CV.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    // const handleDownload = () => {
    //     console.log('Downloading CV...');
    //     const link = document.createElement('a');
    //     link.href = process.env.PUBLIC_URL + '/Tomin_Sahu_CV.pdf'; // Relative path to the CV file
    //     link.download = 'Tomin_Sahu_CV.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     console.log('Download complete.');
    // };

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
        <section className='about-area'>
            <div className="contaner-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={AboutImg} alt="" className=' About_img1' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h1 className='text-uppercase pt-5'>
                            <span>Let me</span>
                            <span> Introduce</span>
                            <span> myself</span>
                        </h1>
                        <div className="paragraph py-4 w-75">
                            <p className='para'>As a passionate web developer, I bring expertise in HTML, CSS, Bootstrap, React, and JavaScript to the table, alongside proficiency in version control using Git and GitHub.</p>
                            <p className='para'>With a solid grasp of AWS services, I thrive on building scalable and efficient web solutions, eager to tackle new challenges and push boundaries in any role.</p>
                            <p className='para'>I'm on the lookout for opportunities where I can leverage my skills and enthusiasm to make a meaningful impact, contributing to innovative projects and continuously learning and growing along the way.</p>
                        </div>
                        <button type='button' className="btn button primary-button text-uppercase" onClick={handleDownload} >Download CV</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About