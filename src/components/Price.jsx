import React from 'react'

function Price () {
  const header = {
    subHeading:"Popular pricing Plan for Creative Project",
    text:"When building a project, start here. Our shared delivers a powerful proven platform"
  }
  const state =[
    {
      id:1,
      heading:'Basic',
      price:30,
      msg1:'Concept',
      msg2:'Planning',
      msg3:'Estimations'
    },
    {
      id:2,
      heading:'Professional',
      price:30,
      msg1:'Concept',
      msg2:'Planning',
      msg3:'Estimations'
    },
    {
      id:3,
      heading:'Comprehensive',
      price:30,
      msg1:'Concept',
      msg2:'Planning',
      msg3:'Estimations'
    }
  ]
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h2 className="mainHeader">
            {header.subHeading}
          </h2>
          <h6 className="mainContent">{header.text}</h6>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">
                  {prices.heading}
                </div>
                <div className="price__rs">
                  <span>$</span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                </ul>
                <div className="price__btn">
                  <a href="price" className="btn btn-outline">
                    Start Now!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Price