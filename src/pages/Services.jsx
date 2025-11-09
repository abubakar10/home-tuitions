import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBook, FaAward, FaUniversity, FaLaptopCode, FaGlobe, FaHome, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: FaGraduationCap,
      title: 'Primary Education',
      description: 'Comprehensive tutoring for primary school students covering all core subjects including Mathematics, English, Science, and more.',
      features: ['Personalized learning plans', 'Interactive sessions', 'Progress tracking', 'Homework support'],
      color: '#ff6b6b'
    },
    {
      icon: FaBook,
      title: 'Secondary Education',
      description: 'Expert guidance for secondary level students with focus on exam preparation and concept building.',
      features: ['Exam preparation', 'Concept clarity', 'Regular assessments', 'Study materials'],
      color: '#4ecdc4'
    },
    {
      icon: FaAward,
      title: 'O-Level & A-Level',
      description: 'Specialized tutoring for Cambridge O-Level and A-Level curricula with experienced tutors.',
      features: ['Cambridge curriculum', 'Past paper practice', 'Exam strategies', 'Subject specialization'],
      color: '#ffe66d'
    },
    {
      icon: FaUniversity,
      title: 'University Level',
      description: 'Advanced tutoring for university students across various disciplines and courses.',
      features: ['Advanced concepts', 'Assignment help', 'Research support', 'Exam preparation'],
      color: '#a8e6cf'
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Professional web development courses covering frontend, backend, and full-stack development.',
      features: ['HTML, CSS, JavaScript', 'React, Node.js', 'Database management', 'Project-based learning'],
      color: '#ff8b94'
    },
    {
      icon: FaGlobe,
      title: 'Online Tutoring',
      description: 'Flexible online tutoring sessions available worldwide with interactive virtual classrooms.',
      features: ['Live sessions', 'Recorded lectures', 'Digital resources', 'Flexible timing'],
      color: '#95e1d3'
    },
  ]

  const serviceTypes = [
    {
      title: 'Home Tutoring',
      description: 'One-on-one personalized sessions at your home in Islamabad',
      icon: FaHome,
      available: 'Available throughout Islamabad'
    },
    {
      title: 'Online Tutoring',
      description: 'Virtual learning sessions from anywhere in the world',
      icon: FaLaptopCode,
      available: 'Available worldwide'
    },
    {
      title: 'Group Sessions',
      description: 'Small group classes for collaborative learning',
      icon: FaUsers,
      available: '2-5 students per group'
    },
  ]

  return (
    <div className="services-page">
      <motion.section
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="services-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="highlight">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="services-subtitle"
          >
            Comprehensive educational services tailored to meet your learning needs
          </motion.p>
        </div>
      </motion.section>

      <section className="services-content">
        <div className="container">
          <motion.div
            className="service-types"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Tutoring Options</h2>
            <div className="types-grid">
              {serviceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="type-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="type-icon">
                    {type.icon && <type.icon />}
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  <span className="availability">{type.available}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="services-grid-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">What We Offer</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  <motion.div
                    className="service-icon-wrapper"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="service-icon">
                      {service.icon && <service.icon />}
                    </div>
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                      >
                        <span className="check-mark">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Start Learning?</h2>
            <p>Contact us today to discuss your educational needs and find the perfect tutoring solution for you.</p>
            <Link to="/contact" className="cta-button">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

