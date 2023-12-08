import React from 'react'
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa'

function Footer () {
  return (
    <div className="footer">
        <div className="container">
            <div className="footerSection">
                <div className="row ">
                    <div className="footer-content">
                        <div className="footer-section-logo">
                            <img src="photo.png" alt="" />
                        </div>
                        <ul className="footerCircles">
                            <li><FaFacebookF className='footerIcon'/></li>
                            <li><FaPinterest className='footerIcon'/></li>
                            <li><FaTwitter className='footerIcon'/></li>
                            <li><FaInstagram className='footerIcon'/></li>
                        </ul>
                        <div className="copy-right-content">
                            <p className="copyright">Copyright {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer