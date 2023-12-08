import React, { useState } from 'react'
import './portfolio.css'
import './data'
import data from './data'

function Portfolio  ()  {
  const [item,setItem] = useState(data);
  const filterItem = (cateItem) => {
    const updateItem = data.filter((curlElem) => {
      return curlElem.category === cateItem
    })
    setItem(updateItem)
  }
  return (
    <section className="portfolio mtop">
      <div className="container">
        <div className="head flexSB">
          <div className="left">
            <h6>Creative Works</h6>
            <h2>Check my Portfolio</h2>
          </div>
        </div>
        
        <div className="links">
          <ul className="flexSB">
            <li className="active" onClick={() => setItem(data)}>All</li>
            <li onClick={() => filterItem("House")}>House</li>
            <li onClick={() => filterItem("Hospital")}>Hospital</li>
            <li onClick={() => filterItem("Commercial")}>Commercial</li>
            <li onClick={() => filterItem("Mercantile")}>Mercantile</li>
            <li onClick={() => filterItem("Recreation")}>Recreation</li>
          </ul>       
        </div>
        <div className="content grid mtop">
            {item.map((elem) => {
              const {cover, title} = elem;
              return(
                <div className="box" >
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="overlay">
                    <h1>{title}</h1>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
  )
}

export default Portfolio