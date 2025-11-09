import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhone, FaGraduationCap, FaBook, FaLaptopCode, FaGlobe, FaStar, FaMapMarkerAlt, FaChalkboardTeacher, FaUserGraduate, FaUserTie } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-background">
          <motion.div
            className="curve-shape curve-top"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1, 1.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="curve-shape curve-bottom"
            animate={{
              rotate: [0, -5, 5, 0],
              scale: [1, 1.05, 1, 1.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              className="decorative-dots"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span></span><span></span><span></span><span></span><span></span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="script-text">Welcome to</span>
              <span className="bold-text">StudPal</span>
              <span className="highlight-text">TUTORING</span>
            </motion.h1>

            <motion.div
              className="divider-line"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Feel free to contact us. We can teach students from primary to university level and also course of Web Development and also O level to A level
            </motion.p>

            <motion.p
              className="hero-location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Home Tuitions available everywhere in Islamabad and online tuitions are available all over Islamabad
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Link to="/contact" className="cta-button">
                CONTACT US
              </Link>
            </motion.div>

            <motion.div
              className="hero-contact"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <span className="phone-icon"><FaPhone /></span>
              <a href="tel:03191773707" className="phone-number">0319-1773707</a>
            </motion.div>

            <motion.div
              className="decorative-dots"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <span></span><span></span><span></span><span></span><span></span>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="image-frame">
              <motion.div
                className="frame-glow"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                    '0 0 40px rgba(255, 215, 0, 0.8)',
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="image-placeholder">
                <div className="tutor-image">
                  <div className="tutor-avatar"><FaChalkboardTeacher /></div>
                  <div className="student-avatar"><FaUserGraduate /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Why Choose Us?</h2>
        </motion.div>

        <div className="features-grid">
          {[
            { icon: FaChalkboardTeacher, title: 'Expert Tutors', desc: 'Qualified and experienced educators' },
            { icon: FaBook, title: 'All Levels', desc: 'Primary to University level' },
            { icon: FaLaptopCode, title: 'Web Development', desc: 'Professional coding courses' },
            { icon: FaGlobe, title: 'Online & Home', desc: 'Flexible learning options' },
            { icon: FaStar, title: 'O & A Levels', desc: 'Specialized curriculum support' },
            { icon: FaMapMarkerAlt, title: 'Islamabad Wide', desc: 'Available throughout the city' },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="feature-icon">
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default Home

