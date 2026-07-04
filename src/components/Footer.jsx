import React from 'react'
import "../css/footer.css";


const Footer = () => {
  return (
    <div className="footer">
        <h3 className="logo">akka-anna</h3>
        <ul className="social-icons">
            <li><a href="https://www.facebook.com/akkaanna" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/akkaanna" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com/akkaanna" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/akkaanna" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>

        <hr />
        <p>FSSAI No : 1234567890</p>
    </div>
  )
}

export default Footer