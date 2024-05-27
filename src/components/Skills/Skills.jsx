import React from 'react'
import './Skills.css'
import Developer from '../../assets/developer_logo.png'
import AWS from '../../assets/aws_logo1.png'
import Figma from '../../assets/uiux_logo.png'
import TechSupport from '../../assets/tech_logo.jpg'

function Services(){
    return (
        <>
        <section className='services-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center services-title">
                        <h2 className="text-uppercase title-text">Skills</h2>
                        <p className="para">I have mentioned my all skills that i know</p>
                    </div>
                </div>
                <div className="container services-list d-flex flex-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 extra-margin">
                        <div className="services">
                            <div className="services-img text-center py-4 dev-maindiv ">
                                <img className='dev_icon' src={Developer} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Web Developer</h5>
                                <p className="card-text text-secondary">I possess a strong foundation in web development technologies including HTML, CSS, Bootstrap,JavaScript and React . Additionally, I am proficient in version control using Git and GitHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 extra-margin">
                        <div className="services">
                            <div className="services-img text-center py-4 dev-maindiv">
                                <img className='dev_icon' src={AWS} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Cloud Engineer</h5>
                                <p className="card-text text-secondary">Proficient in AWS services such as EC2, IAM, Snapshots, Route53, S3 bucket, load balancing, autoscaling, cost optimization, VPC setup, with hands-on experience in real-world projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 extra-margin">
                        <div className="services">
                            <div className="services-img text-center py-4 dev-maindiv">
                                <img className='dev_icon' src={Figma} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">UI/UX Designer</h5>
                                <p className="card-text text-secondary">I have a basic knowledge and understanding of Figma. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,Lorem ipsum dolor sit amet dolor sit amet dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 extra-margin">
                        <div className="services">
                            <div className="services-img text-center py-4 dev-maindiv">
                                <img className='dev_icon' src={TechSupport} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Technical Support</h5>
                                <p className="card-text text-secondary">My technical support skills entail adeptly resolving complex issues, providing prompt assistance, and ensuring optimal functionality of systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Services