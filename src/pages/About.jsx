import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const stats = [
    { number: '500+', label: 'Students Taught' },
    { number: '50+', label: 'Expert Tutors' },
    { number: '10+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To provide quality education that empowers students to achieve their academic goals and excel in their chosen fields.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To become the leading tutoring service in Islamabad, known for excellence, innovation, and student success.'
    },
    {
      icon: '💎',
      title: 'Our Values',
      description: 'We believe in personalized learning, dedication, integrity, and creating a supportive environment for every student.'
    },
  ]

  return (
    <div className="about-page">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="highlight">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-subtitle"
          >
            Empowering students through quality education and personalized learning
          </motion.p>
        </div>
      </motion.section>

      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Who We Are</h2>
            <p>
              StudyPal is a premier educational service provider based in Islamabad, 
              dedicated to helping students achieve academic excellence. We offer comprehensive tutoring 
              services for students from primary level through university, including specialized courses 
              in Web Development and support for O-Level and A-Level curricula.
            </p>
            <p>
              Our team of experienced and qualified tutors is committed to providing personalized attention 
              to each student, ensuring they receive the guidance and support needed to succeed. Whether 
              you prefer home-based tutoring or online sessions, we offer flexible learning options to 
              accommodate your schedule and learning style.
            </p>
          </motion.div>

          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="values-section">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="why-choose-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Why Choose Us?</h2>
            <div className="features-list">
              {[
                'Experienced and qualified tutors',
                'Personalized learning approach',
                'Flexible scheduling options',
                'Home and online tutoring available',
                'Comprehensive curriculum coverage',
                'Affordable pricing',
                'Regular progress tracking',
                'Support for all academic levels',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

