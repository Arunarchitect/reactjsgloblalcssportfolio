import React from 'react'

function About  () {
  return (
    <div className="about">
        <div className="container">
            <div className="common">
                <h1 className="about-title"></h1>
                <div className="underline-border"></div>
            </div>
            <div className="row h-650 alignCenter" >
                <div className="col-6">
                    <div className="about__image">
                        <img src="photo.png" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <h1>Creative Architect <br /> based in Kerala</h1>
                    <div className="about__info">
                        <p>
                        I'm a passionate building architect, driven by creativity and a love for design. With an eye for detail and a commitment to innovation, I craft spaces that blend form and function. My diverse portfolio reflects a dedication to pushing the boundaries of architectural excellence, creating inspiring and enduring structures.
                        </p>
                        <div className="about__buttons">
                            <a href="#about" className='btn about-btn-outline'>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About