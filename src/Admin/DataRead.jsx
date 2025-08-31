import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "../CSS/DataRead.module.css"; // 👈 import module

const DataRead = () => {
  const { id } = useParams();

  const [value, setValue] = useState({
    name: "",
    description: "",
    image: "",
    location: "",
    besttime: "",
    category: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/data/" + id).then((val) => {
      setValue(val.data);
    })
  }, [id]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Place Details</h1>

      <p className={styles.detailItem}><span>Name:</span> {value.name}</p>
      <p className={styles.detailItem}><span>Description:</span> {value.description}</p>
      <p className={styles.detailItem}><span>Location:</span> {value.location}</p>
      <p className={styles.detailItem}><span>Best Time:</span> {value.besttime}</p>
      <p className={styles.detailItem}><span>Category:</span> {value.category}</p>

      <Link to="/" className={styles.backLink}>← Back to Home</Link>
    </div>
  )
}

export default DataRead;
