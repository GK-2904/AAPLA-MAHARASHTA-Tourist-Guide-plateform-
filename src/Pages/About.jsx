import React from 'react';
import { FaMapMarkedAlt, FaMountain, FaUmbrellaBeach, FaPrayingHands, FaHistory, FaUsers, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../CSS/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>About Maharashtra Tourism</h1>
        <p className={styles.subtitle}>
          Discover the heart and soul of India through the diverse landscapes, rich culture, and spiritual heritage of Maharashtra
        </p>
      </div>

      <div className={styles.content}>
        {/* Overview Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🏛️</span>
            Welcome to Maharashtra
          </h2>
          <div className={styles.sectionContent}>
            <p>
              Maharashtra, the <span className={styles.highlight}>second-largest state</span> in India by population and third-largest by area, 
              is a land of incredible diversity and cultural richness. From the bustling metropolis of Mumbai to the serene 
              hill stations of the Western Ghats, from ancient temples to pristine beaches, Maharashtra offers an 
              unparalleled tourism experience.
            </p>
            <p>
              Our state is home to <span className={styles.highlight}>UNESCO World Heritage Sites</span>, ancient cave complexes, 
              historic forts, and vibrant festivals that showcase the true essence of Indian culture and heritage.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>48</div>
            <div className={styles.statLabel}>Districts</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>720</div>
            <div className={styles.statLabel}>KM Coastline</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Jyotirlingas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>8</div>
            <div className={styles.statLabel}>Ashtavinayak Temples</div>
          </div>
        </div>

        {/* Tourism Highlights */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🌟</span>
            Tourism Highlights
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕍</div>
              <h3 className={styles.featureTitle}>Sacred Temples</h3>
              <p className={styles.featureDescription}>
                Home to 12 Jyotirlingas and 8 Ashtavinayak temples, Maharashtra is a spiritual paradise. 
                Visit the famous Shirdi Sai Baba Temple, Trimbakeshwar, and Siddhivinayak for divine blessings.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏔️</div>
              <h3 className={styles.featureTitle}>Hill Stations</h3>
              <p className={styles.featureDescription}>
                Escape to the cool heights of Mahabaleshwar, Lonavala, Matheran, and Panchgani. 
                Experience breathtaking views, strawberry farms, and adventure activities in the Western Ghats.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏖️</div>
              <h3 className={styles.featureTitle}>Pristine Beaches</h3>
              <p className={styles.featureDescription}>
                With a 720km coastline, Maharashtra offers beautiful beaches like Ganpatipule, Alibag, 
                and Tarkarli. Perfect for water sports, dolphin watching, and peaceful relaxation.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏰</div>
              <h3 className={styles.featureTitle}>Historic Forts</h3>
              <p className={styles.featureDescription}>
                Explore the rich history through magnificent forts like Raigad, Sinhagad, and Pratapgad. 
                Each fort tells a story of bravery and architectural brilliance.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕳️</div>
              <h3 className={styles.featureTitle}>Ancient Caves</h3>
              <p className={styles.featureDescription}>
                Discover the world-famous Ajanta and Ellora Caves, showcasing ancient Buddhist, 
                Hindu, and Jain art and architecture dating back centuries.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎭</div>
              <h3 className={styles.featureTitle}>Cultural Heritage</h3>
              <p className={styles.featureDescription}>
                Experience vibrant festivals like Ganesh Chaturthi, Gudi Padwa, and Lavani dance. 
                Maharashtra's culture is a beautiful blend of tradition and modernity.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📜</span>
            Historical Journey
          </h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>Ancient Times</div>
                <div className={styles.timelineTitle}>Early Civilizations</div>
                <div className={styles.timelineDescription}>
                  Maharashtra was home to ancient civilizations with evidence of human habitation dating back to the Stone Age.
                </div>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2nd Century BCE</div>
                <div className={styles.timelineTitle}>Buddhist Influence</div>
                <div className={styles.timelineDescription}>
                  The region flourished under Buddhist influence, leading to the creation of magnificent cave complexes.
                </div>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>17th Century</div>
                <div className={styles.timelineTitle}>Maratha Empire</div>
                <div className={styles.timelineDescription}>
                  Chhatrapati Shivaji Maharaj established the Maratha Empire, creating a legacy of bravery and governance.
                </div>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>1960</div>
                <div className={styles.timelineTitle}>State Formation</div>
                <div className={styles.timelineDescription}>
                  Maharashtra was officially formed as a state, marking the beginning of modern governance and development.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Plan Your Visit</h2>
          <p style={{fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9}}>
            Ready to explore the wonders of Maharashtra? Get in touch with us for personalized travel guidance.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <span>+91 22 2202 4400</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@maharashtratourism.gov.in</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
          <button className={styles.ctaButton}>
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;