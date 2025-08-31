import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaClock, FaStar, FaHeart } from 'react-icons/fa';
import styles from '../CSS/Temples.module.css';

const Temples = () => {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTemples, setFilteredTemples] = useState([]);

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const res = await axios.get("http://localhost:5000/data");
        const templeData = res.data.filter(item => item.category === "temple");
        setTemples(templeData);
        setFilteredTemples(templeData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchTemples();
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = temples.filter(temple =>
      temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      temple.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTemples(filtered);
  }, [searchTerm, temples]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🕍</div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#374151'}}>Discovering Sacred Temples...</h2>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Loading divine destinations</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Sacred Temples of Maharashtra
          </h1>
          <p className={styles.subtitle}>
            Discover the spiritual heritage and divine architecture of Maharashtra's most revered temples
          </p>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search temples by name or location..."
                className={styles.searchField}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{filteredTemples.length}</div>
            <div className={styles.statLabel}>Sacred Temples</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Jyotirlingas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>8</div>
            <div className={styles.statLabel}>Ashtavinayak</div>
          </div>
        </div>
      </div>

      {/* Temples Grid */}
      <div className={styles.templesGrid}>
        {filteredTemples.map((temple, index) => (
          <div
            key={temple.id}
            className={styles.templeCard}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className={styles.imageContainer}>
              <img
                src={temple.image}
                alt={temple.name}
                className={styles.templeImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/6b7280?text=Temple+Image';
                }}
              />
              <button className={styles.heartButton}>
                <FaHeart />
              </button>
              <div className={styles.ratingContainer}>
                <div className={styles.rating}>
                  <FaStar className={styles.starIcon} />
                  <span>4.8</span>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.templeName}>
                {temple.name}
              </h3>
              
              <p className={styles.description}>
                {temple.description}
              </p>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={`${styles.infoIcon} ${styles.locationIcon}`} />
                  <span>{temple.location}</span>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={`${styles.infoIcon} ${styles.timeIcon}`} />
                  <span>{temple.besttime}</span>
                </div>
              </div>
              
              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton}>
                  View Details
                </button>
                <button className={styles.secondaryButton}>
                  Directions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTemples.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No temples found</h3>
          <p className={styles.noResultsText}>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default Temples;