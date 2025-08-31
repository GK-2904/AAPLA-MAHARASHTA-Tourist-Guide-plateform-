import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaClock, FaStar, FaHeart, FaMountain, FaThermometerHalf } from 'react-icons/fa';
import styles from '../CSS/HillStation.module.css';

const HillStation = () => {
  const [hillStations, setHillStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHillStations, setFilteredHillStations] = useState([]);

  useEffect(() => {
    const fetchHillStations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/data");
        const hillStationData = res.data.filter(item => item.category === "hillstation");
        setHillStations(hillStationData);
        setFilteredHillStations(hillStationData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchHillStations();
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = hillStations.filter(station =>
      station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHillStations(filtered);
  }, [searchTerm, hillStations]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🏔️</div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#374151'}}>Exploring Hill Stations...</h2>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Discovering mountain retreats</p>
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
            Hill Stations of Maharashtra
          </h1>
          <p className={styles.subtitle}>
            Escape to the cool heights and scenic beauty of Maharashtra's most beautiful hill stations
          </p>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search hill stations by name or location..."
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
            <div className={styles.statNumber}>{filteredHillStations.length}</div>
            <div className={styles.statLabel}>Hill Stations</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>Western Ghats</div>
            <div className={styles.statLabel}>Mountain Range</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15°C</div>
            <div className={styles.statLabel}>Average Temperature</div>
          </div>
        </div>
      </div>

      {/* Hill Stations Grid */}
      <div className={styles.hillStationsGrid}>
        {filteredHillStations.map((station, index) => (
          <div
            key={station.id}
            className={styles.hillStationCard}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className={styles.imageContainer}>
              <img
                src={station.image}
                alt={station.name}
                className={styles.hillStationImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/e5f3ff/3b82f6?text=Hill+Station+Image';
                }}
              />
              <button className={styles.heartButton}>
                <FaHeart />
              </button>
              <div className={styles.ratingContainer}>
                <div className={styles.rating}>
                  <FaStar className={styles.starIcon} />
                  <span>4.7</span>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.hillStationName}>
                <FaMountain className={styles.mountainIcon} />
                {station.name}
              </div>
              
              <p className={styles.description}>
                {station.description}
              </p>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={`${styles.infoIcon} ${styles.locationIcon}`} />
                  <span>{station.location}</span>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={`${styles.infoIcon} ${styles.timeIcon}`} />
                  <span>{station.besttime}</span>
                </div>
                <div className={styles.infoItem}>
                  <FaThermometerHalf className={`${styles.infoIcon} ${styles.temperatureIcon}`} />
                  <span>15°C - 25°C</span>
                </div>
              </div>
              
              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton}>
                  Explore Now
                </button>
                <button className={styles.secondaryButton}>
                  Weather
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredHillStations.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🏔️</div>
          <h3 className={styles.noResultsTitle}>No hill stations found</h3>
          <p className={styles.noResultsText}>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default HillStation;