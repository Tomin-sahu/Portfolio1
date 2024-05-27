
import React from "react";
import './Projects.css';
import { Carousel } from 'react-bootstrap';
// import  A from '../../assets/figma_logo.png'
// import  A1 from '../../assets/figma_logo1.png'
// import  A2 from '../../assets/figma_logo2.png'

function Projects() {
    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="about-title">
                                <h2 className="text-uppercase title-h1">Projects Name</h2>
                                <p className="para"><i>I have mentioned my Projects</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container carousel py-lg-5">
                    <Carousel>
                        <Carousel.Item>
                            {/* <img
                                className="d-block w-100"
                                src={A}
                                alt="First slide"
                            /> */}
                            <div className="Carousel-div">
                                <h3>Tata Motors Live Project</h3>
                                <p>I contributed to a live project at Tata Motors where I utilized AWS services to enhance scalability and efficiency, implementing solutions such as EC2 for virtual computing, S3 for storage management, Snapshots for backup, Route53 for Domain Mapping and IAM Services for Secure Authenticaton</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="Carousel-div">
                                <h3>Gym Website (Project)</h3>
                                <p>Developed a responsive gym website using HTML, CSS, and JavaScript to provide users with a visually appealing and interactive experience.</p>
                                <a href="">Link : qwertyuioplkjhgfdsazxcvbnm,</a>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="Carousel-div">
                                <h3>Cafe Website (Project)</h3>
                                <p>I developed a café project using HTML, CSS, and JavaScript, where users can browse through the café's menu, view details of different items, and place orders. Additionally, I implemented the project using the React framework, enhancing its interactivity and responsiveness.</p>
                                <a href="">Link : qwertyuioplkjhgfdsazxcvbnm,</a>
                            </div>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                             <div className="Carousel-div">
                            <h3>Library Management System (Project)</h3>
                            <p>My library management project, built using Python and MySQL, enables users to efficiently manage library operations right from the terminal. With my project, users can easily add, delete, and update books, as well as track borrowing and returning activities.</p>
                            </div>
                        </Carousel.Item> */}
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Projects;