import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Ahmed Ali',
      role: 'A-Level Student',
      image: '👨‍🎓',
      rating: 5,
      text: 'The tutoring sessions have been incredibly helpful. My grades have improved significantly, and the tutors are very patient and understanding. Highly recommend!',
      subject: 'Mathematics & Physics'
    },
    {
      name: 'Fatima Khan',
      role: 'O-Level Student',
      image: '👩‍🎓',
      rating: 5,
      text: 'I was struggling with Chemistry, but after joining these classes, I feel much more confident. The online sessions are very convenient and the teaching quality is excellent.',
      subject: 'Chemistry'
    },
    {
      name: 'Hassan Malik',
      role: 'University Student',
      image: '👨‍💼',
      rating: 5,
      text: 'The Web Development course is comprehensive and well-structured. The instructor explains complex concepts in a simple way. I\'ve learned so much in just a few months!',
      subject: 'Web Development'
    },
    {
      name: 'Ayesha Ahmed',
      role: 'Parent',
      image: '👩',
      rating: 5,
      text: 'My daughter\'s performance has improved dramatically since she started home tutoring. The tutor is professional, punctual, and really cares about the student\'s progress.',
      subject: 'Primary Education'
    },
    {
      name: 'Bilal Shah',
      role: 'Secondary Student',
      image: '🧑‍🎓',
      rating: 5,
      text: 'The flexible scheduling and personalized attention make these classes perfect for me. The tutors are knowledgeable and always ready to help. Great experience overall!',
      subject: 'Multiple Subjects'
    },
  ]

  const achievements = [
    { number: '500+', label: 'Happy Students', icon: '😊' },
    { number: '95%', label: 'Success Rate', icon: '⭐' },
    { number: '50+', label: 'Expert Tutors', icon: '👨‍🏫' },
    { number: '10+', label: 'Years Experience', icon: '🎓' },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="testimonials-page">
      <motion.section
        className="testimonials-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="testimonials-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our <span className="highlight">Students Say</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="testimonials-subtitle"
          >
            Real feedback from students and parents who have experienced our tutoring services
          </motion.p>
        </div>
      </motion.section>

      <section className="testimonials-content">
        <div className="container">
          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="testimonials-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Student Testimonials</h2>
            
            <div className="testimonial-carousel">
              <button className="carousel-btn prev" onClick={prevTestimonial}>
                ‹
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="testimonial-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{testimonials[activeTestimonial].image}</div>
                    <div className="testimonial-info">
                      <h3>{testimonials[activeTestimonial].name}</h3>
                      <p className="testimonial-role">{testimonials[activeTestimonial].role}</p>
                      <p className="testimonial-subject">{testimonials[activeTestimonial].subject}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonials[activeTestimonial].text}"</p>
                </motion.div>
              </AnimatePresence>

              <button className="carousel-btn next" onClick={nextTestimonial}>
                ›
              </button>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="gallery-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Learning Moments</h2>
            <div className="gallery-grid">
              {[
                { emoji: '📚', label: 'Study Sessions' },
                { emoji: '💻', label: 'Online Classes' },
                { emoji: '✏️', label: 'Practice Time' },
                { emoji: '🎯', label: 'Exam Prep' },
                { emoji: '👨‍🏫', label: 'Expert Guidance' },
                { emoji: '🏆', label: 'Achievements' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="gallery-emoji">{item.emoji}</div>
                  <div className="gallery-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

