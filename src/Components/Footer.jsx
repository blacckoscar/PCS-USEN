import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div> <footer className="footer">
    <div className="footer-top section">
      <div className="container">
        <div className="footer-brand">
          <a href="/" className="logo">PCS USEN</a>
          <p className="footer-text">
          PCS USEN, a visionary leader driving innovation with passion and purpose.
          </p>
          <form action className="newsletter-form">
            <input type="email" name="email_address" placeholder="Enter your email" required className="email-field" />
            <button type="submit" className="form-btn">
              <ion-icon name="paper-plane" aria-hidden="true" />
            </button>
          </form>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Our Services</p>
          </li>
          <li>
            <a href="/" className="footer-link">Strategy &amp; Research</a>
          </li>
          <li>
            <a href="/" className="footer-link">Web Development</a>
          </li>
          <li>
            <a href="/" className="footer-link">Web Solution</a>
          </li>
          <li>
            <a href="/" className="footer-link">Digital Merketing</a>
          </li>
          <li>
            <a href="/" className="footer-link">App Design</a>
          </li>
          <li>
            <a href="/" className="footer-link">App Development</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Company</p>
          </li>
          <li>
            <a href="/about" className="footer-link">About Company</a>
          </li>
          <li>
            <a href="/services" className="footer-link">Our Services</a>
          </li>
          <li>
            <a href="/team" className="footer-link">Our Portfolio</a>
          </li>
          <li>
            <a href="/pricing" className="footer-link">Our Price</a>
          </li>
          <li>
            <a href="/clients" className="footer-link">Latest News</a>
          </li>
          <li>
            <a href="/contact" className="footer-link">Contact Us</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact Us</p>
          </li>
          <li className="footer-item">
            <ion-icon name="location" aria-hidden="true" />
            <address className="contact-link address">
            324 Main Street 
Suit 1071
where ever
            </address>
          </li>
          <li className="footer-item">
            <ion-icon name="call" aria-hidden="true" />
            <a href="tel:+12407701632" className="contact-link">+12407701632</a>
          </li>
          <li className="footer-item">
            <ion-icon name="mail" aria-hidden="true" />
            <a href="mailto:mozzentagroup@gmail.com" className="contact-link">mozzentagroup@gmail.com</a>
          </li>
          <li className="footer-item">
            <ul className="social-list">
              <li className=''>
                <a href="/" className="">
                  <FaFacebook name="logo-facebook" size={25} className="hover:text-green-500" />
                </a>
              </li>
              <li>
                <a href="/" className="">
                  <FaTwitter name="logo-twitter" size={25} className="hover:text-green-500"/>
                </a>
              </li>
              <li>
                <a href="/" className="">
                  <FaInstagram name="logo-instagram" size={25} className="hover:text-green-500"/>
                </a>
              </li>
              <li>
                <a href="/" className="">
                  <FaPinterest name="logo-pinterest" size={25} className="hover:text-green-500"/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2023 PCS USEN | All Rights Reserved by <a href="*" className="copyright-link">Usen's Agency</a>
        </p>
        <ul className="footer-bottom-list">
          <li>
            <a href="*" className="footer-bottom-link">Privacy Policy</a>
          </li>
          <li>
            <a href="*" className="footer-bottom-link">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer