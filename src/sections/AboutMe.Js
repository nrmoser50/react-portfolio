// AboutMe.js (React Component)

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <div className="container">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              Hi there! I'm [Your Name], a passionate and creative [Your Role] based in [Your Location]. I have a strong background in [Your Expertise] and a love for bringing ideas to life through [Your Creative Mediums].
            </p>
            <p>
              With a focus on [Specific Interests], I enjoy [What You Love Doing]. My goal is to [Your Aspirations or Mission].
            </p>
            <div className="about-me-image">
            <img src={require('../images/cat.jpg')} alt='Cat' style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>
              When I'm not immersed in design and development, you can find me [Hobbies or Other Interests]. Let's connect and explore how we can collaborate on exciting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
