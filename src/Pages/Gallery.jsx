import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes, FaHeart, FaDownload, FaShare } from 'react-icons/fa';
import styles from '../CSS/Gallery.module.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/data");
        // Create gallery images from the data
        const galleryImages = res.data.map((item, index) => ({
          id: item.id,
          src: item.image,
          title: item.name,
          location: item.location,
          category: item.category,
          description: item.description,
          likes: Math.floor(Math.random() * 100) + 50,
          downloads: Math.floor(Math.random() * 50) + 20
        }));
        setImages(galleryImages);
        setFilteredImages(galleryImages);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchImages();
    }, 1000);
  }, []);

  const filters = [
    { id: 'all', name: 'All Images', icon: '🖼️' },
    { id: 'temple', name: 'Temples', icon: '🕍' },
    { id: 'hillstation', name: 'Hill Stations', icon: '🏔️' },
    { id: 'beaches', name: 'Beaches', icon: '🏖️' }
  ];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(img => img.category === category);
      setFilteredImages(filtered);
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📸</div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#374151'}}>Loading Gallery...</h2>
            <p style={{color: '#6b7280', marginTop: '0.5rem'}}>Preparing beautiful images</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Maharashtra Gallery</h1>
        <p className={styles.subtitle}>
          Explore the stunning beauty of Maharashtra through our curated collection of high-quality images
        </p>
      </div>

      {/* Stats Section */}
      <div className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{images.length}</div>
            <div className={styles.statLabel}>Total Images</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{images.filter(img => img.category === 'temple').length}</div>
            <div className={styles.statLabel}>Temple Photos</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{images.filter(img => img.category === 'hillstation').length}</div>
            <div className={styles.statLabel}>Hill Station Views</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{images.filter(img => img.category === 'beaches').length}</div>
            <div className={styles.statLabel}>Beach Scenes</div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
            onClick={() => handleFilter(filter.id)}
          >
            <span style={{marginRight: '0.5rem'}}>{filter.icon}</span>
            {filter.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={styles.galleryItem}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className={styles.galleryImage}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/f3e8ff/a855f7?text=Gallery+Image';
              }}
            />
            <div className={styles.category}>{image.category}</div>
            <div className={styles.overlay}>
              <h3 className={styles.imageTitle}>{image.title}</h3>
              <p className={styles.imageLocation}>{image.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div className={`${styles.lightbox} ${selectedImage ? styles.active : ''}`}>
        {selectedImage && (
          <>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className={styles.lightboxImage}
            />
            <button className={styles.closeButton} onClick={closeLightbox}>
              <FaTimes />
            </button>
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white'
            }}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{selectedImage.title}</h3>
              <p style={{fontSize: '1rem', opacity: 0.9}}>{selectedImage.location}</p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem'}}>
                <button style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}>
                  <FaHeart />
                </button>
                <button style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}>
                  <FaDownload />
                </button>
                <button style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}>
                  <FaShare />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;