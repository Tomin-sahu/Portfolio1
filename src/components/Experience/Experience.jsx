import React from 'react'
import Nseit from '../../assets/nseit_logo.jpg'
import Railworld from '../../assets/railworld_logo.jpg'
import './Experience.css'

function Experience(){
    return (
        <>
        <section className="brand-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src={Nseit} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="single-brand ">
                                    <img src={Railworld} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="experience-area">
                            <div className="d-flex flex-row years-area">
                                <h2 className="p-3 years">1.4</h2>
                                <h2 className='yearsh2'>
                                    <span className='years-span'>Years of</span>
                                    <span className='years-span'> Working</span>
                                    <span className='years-span'> Experience</span>
                                </h2>
                            </div>
                            <div className="d-flex flex-row flex-wrap call-area">
                                <span><i className="fa-solid fa-phone fa-3x call-icon"></i></span>
                                <div className="call-now">
                                    <a className='text-uppercase h4 font-roboto' href="">Call Now</a>
                                    <span className='font-roboto py-2'>(+91)7898379442</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience