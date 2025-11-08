import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Home & Online Tutoring</h3>
          <p>Quality education from primary to university level. Professional tutoring services in Islamabad and online worldwide.</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Contact Info</h4>
          <p>
            <span className="icon">📞</span>
            <a href="tel:03191773707">0319-1773707</a>
          </p>
          <p>
            <span className="icon">📍</span>
            Islamabad, Pakistan
          </p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Home & Online Tutoring Classes. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

