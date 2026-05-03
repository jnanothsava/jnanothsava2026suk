import React from 'react';

const About = () => {
  return (
    <div className="container page-shell animate-fade-in" style={{ maxWidth: '900px' }}>
      
      {/* About University */}
      <div className="content-panel content-panel--spacious" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title section-title--left" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          About <span className="text-gradient">University</span>
        </h2>
        <div className="muted-copy">
          <p style={{ marginBottom: '1.2rem' }}>
            <strong>Sharnbasva University</strong>, located in Kalaburagi, Karnataka, India, is a multidisciplinary private university established in 2017 with the objective of providing quality higher education, promoting research, and contributing to societal development. The university is recognized by the University Grants Commission (UGC), the statutory body responsible for maintaining standards of higher education in India.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            The establishment of Sharnbasva University marked a significant milestone in the educational development of the Kalyana-Karnataka region, which historically required expanded access to higher education and advanced research facilities. The university aims to create a vibrant academic ecosystem where students can acquire knowledge, develop professional competencies, and cultivate ethical and social values.
          </p>
          <p>
            With its strong commitment to academic excellence, innovation, and community engagement, Sharnbasva University strives to prepare students to meet global challenges while contributing positively to society.
          </p>
        </div>
      </div>

      {/* About Jnanothsava 2026 */}
      <div className="content-panel content-panel--spacious" style={{ marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: '0.1', borderRadius: '50%' }}></div>
        <h2 className="section-title section-title--left" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          About <span className="text-gradient">Jnanothsava 2026</span>
        </h2>
        <div className="muted-copy">
          <p style={{ marginBottom: '1.2rem' }}>
            <strong>Jnanothsava 2026</strong>, the biennial Techno-Cultural Fest of Sharnbasva University, is a vibrant celebration of knowledge, innovation, and creativity, scheduled to be held on 15th and 16th May 2026.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            The fest brings together students from various institutions, offering a dynamic platform to showcase talent, exchange ideas, and engage in meaningful competition. With a thoughtfully curated schedule, Jnanothsava features a diverse range of technical, management, and cultural events.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            The technical segment includes flagship events such as hackathons, coding competitions, project exhibitions, and technical quizzes, designed to enhance analytical thinking and problem-solving skills. Management events like business quizzes and stock market simulations foster strategic thinking and decision-making abilities.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Complementing these are a variety of cultural events including art, music, dance, fashion, and creative performances, providing participants an opportunity to express their artistic talents and celebrate cultural diversity.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            More than just a fest, Jnanothsava serves as a platform for innovation, collaboration, and experiential learning. It encourages students to think beyond academics, develop practical skills, and build confidence while interacting with peers from diverse backgrounds.
          </p>
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', borderLeft: '4px solid var(--color-primary-light)', marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Join Us</h3>
            <p style={{ margin: 0 }}>
              Be a part of Jnanothsava 2026 and experience an inspiring blend of technology, culture, and creativity—where ideas come alive and talents shine.
            </p>
          </div>
        </div>
      </div>

      {/* Chancellor Message */}
      <div className="content-panel content-panel--spacious" style={{ position: 'relative' }}>
        <h2 className="section-title section-title--left" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          <span className="text-gradient">Chancellor</span> Message
        </h2>
        <div className="muted-copy" style={{ fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '4rem', color: 'var(--color-primary)', opacity: 0.2, position: 'absolute', top: '-20px', left: '-15px', fontFamily: 'serif', lineHeight: 1 }}>"</span>
          <p style={{ marginBottom: '1.2rem' }}>
            Dear Friends and students,
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            It is with immense pleasure and pride to extend my warm greetings to welcome you all on the occasion of Jnanothsava 2026, the biennial Techno-Cultural Fest of Sharnbasva University.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Jnanothsava stands as a vibrant celebration of knowledge, creativity, and innovation. Such platforms play a vital role in nurturing young minds by encouraging them to think beyond classrooms, explore their talents, and engage in healthy competition. The blend of technical and cultural activities reflects the holistic development that our institution strives to promote.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            It will motivate students to demonstrate their talents, share ideas, and foster meaningful connections. Activities such as coding competitions, hackathons, quizzes, and cultural performances not only strengthen skills but also nurture teamwork, leadership, and confidence.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Let us unite to innovate, uplift, and celebrate the future we are collectively shaping.
          </p>
          <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <p style={{ marginBottom: '0.25rem', fontStyle: 'normal', fontWeight: 'bold', color: 'var(--color-text)' }}>With best wishes,</p>
            <p style={{ marginBottom: '0.25rem', fontStyle: 'normal', color: 'var(--color-primary-light)' }}>Chancellor</p>
            <p style={{ marginBottom: '0.25rem', fontStyle: 'normal' }}>Sharnbasva University</p>
            <p style={{ margin: 0, fontStyle: 'normal' }}>Kalaburagi</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
