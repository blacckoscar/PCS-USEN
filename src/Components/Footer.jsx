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
            Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
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
            <a href="/" className="footer-link">About Company</a>
          </li>
          <li>
            <a href="/" className="footer-link">Our Services</a>
          </li>
          <li>
            <a href="/" className="footer-link">Our Portfolio</a>
          </li>
          <li>
            <a href="/" className="footer-link">Our Blog</a>
          </li>
          <li>
            <a href="/" className="footer-link">Latest News</a>
          </li>
          <li>
            <a href="/" className="footer-link">Contact Us</a>
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
Laurel MD 20707
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
              <li>
                <a href="/" className="social-link">
                  <FaFacebook name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <FaTwitter name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <FaInstagram name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <FaPinterest name="logo-pinterest" />
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
          © 2022 PCS USEN | All Rights Reserved by <a href="*" className="copyright-link">Usen's Agency</a>
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