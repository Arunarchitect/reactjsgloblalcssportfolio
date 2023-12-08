import React from 'react'

function Services () {
    const header = {
        mainheader: "My Expertise",
        subHeading: 'Provide Wide Range of Digital Services',
    };
    const state = [
        {
            id:1,
            icon:'./photo.png',
            heading:'planning',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        },
        {
            id:2,
            icon:'./photo.png',
            heading:'designing',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        },
        {
            id:3,
            icon:'./photo.png',
            heading:'drafting',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        },
        {
            id:4,
            icon:'./photo.png',
            heading:'drafting',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        },
        {
            id:5,
            icon:'./photo.png',
            heading:'drafting',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        },
        {
            id:6,
            icon:'./photo.png',
            heading:'drafting',
            text:'Im a passionate building architect, driven by creativity and a love for design.'
        }
    ]
  return (
    <div className="services">
        <div className="container">
            <div className="common">
                <h6 className="heading">{header.mainheader}</h6>
                <h2 className="subheading">{header.subHeading}</h2>
                <div className="commonBorder"></div>
            </div>
            <div className="row bgMain">
                {state.map((info)=>(
                    <div className="col-4 bgMain">
                        <div className="services__box">
                        <img src={info.icon} alt="" className="commonIcons" />
                        <h4 className="services__box-header">{info.heading}</h4>
                        <p className="services__box-p">{info.text}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services