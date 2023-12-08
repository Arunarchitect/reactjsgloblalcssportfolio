import React from 'react'

function Header  () {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header-section">
                            <h2>Hello, I am</h2>
                            <h1>Arun Ravikumar</h1>
                            <p>dh uij hihuif  uh vv ghoiu ffoi h hfoe j  he hef ojv poiuehpoi oiooidjfoiffoj d</p>
                            <div className="header__buttons">
                                <a href="header" className="btn btn-outline">
                                    Hire Me !
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src="./photo.png" alt="" className="image"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header