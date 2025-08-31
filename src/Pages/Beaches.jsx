import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaClock, FaStar, FaHeart, FaUmbrellaBeach, FaWater } from 'react-icons/fa';
import styles from '../CSS/Beaches.module.css';

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBeaches, setFilteredBeaches] = useState([]);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/data");
        const beachData = res.data.filter(item => item.category === "beaches");
        setBeaches(beachData);
        setFilteredBeaches(beachData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchBeaches();
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = beaches.filter(beach =>
      beach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beach.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeaches(filtered);
  }, [searchTerm, beaches]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🏖️</div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#374151'}}>Discovering Beaches...</h2>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Exploring coastal paradises</p>
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
            Beaches of Maharashtra
          </h1>
          <p className={styles.subtitle}>
            Experience the pristine beauty and tranquility of Maharashtra's most stunning coastal destinations
          </p>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search beaches by name or location..."
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
            <div className={styles.statNumber}>{filteredBeaches.length}</div>
            <div className={styles.statLabel}>Beautiful Beaches</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>720 km</div>
            <div className={styles.statLabel}>Coastline</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>28°C</div>
            <div className={styles.statLabel}>Average Temperature</div>
          </div>
        </div>
      </div>

      {/* Beaches Grid */}
      <div className={styles.beachesGrid}>
        {filteredBeaches.map((beach, index) => (
          <div
            key={beach.id}
            className={styles.beachCard}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className={styles.imageContainer}>
              <img
                src={beach.image}
                alt={beach.name}
                className={styles.beachImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/e0f2fe/0284c7?text=Beach+Image';
                }}
              />
              <button className={styles.heartButton}>
                <FaHeart />
              </button>
              <div className={styles.ratingContainer}>
                <div className={styles.rating}>
                  <FaStar className={styles.starIcon} />
                  <span>4.6</span>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.beachName}>
                <FaUmbrellaBeach className={styles.beachIcon} />
                {beach.name}
              </div>
              
              <p className={styles.description}>
                {beach.description}
              </p>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={`${styles.infoIcon} ${styles.locationIcon}`} />
                  <span>{beach.location}</span>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={`${styles.infoIcon} ${styles.timeIcon}`} />
                  <span>{beach.besttime}</span>
                </div>
                <div className={styles.infoItem}>
                  <FaWater className={`${styles.infoIcon} ${styles.waterIcon}`} />
                  <span>Perfect for swimming</span>
                </div>
              </div>
              
              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton}>
                  Visit Beach
                </button>
                <button className={styles.secondaryButton}>
                  Activities
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredBeaches.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🏖️</div>
          <h3 className={styles.noResultsTitle}>No beaches found</h3>
          <p className={styles.noResultsText}>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default Beaches;