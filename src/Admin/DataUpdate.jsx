import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import styles from "../CSS/Update.module.css"; // 👈 Import CSS Module

const DataUpdate = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [value, setValue] = useState({
    name: "",
    description: "",
    image: "",
    location: "",
    besttime: "",
    category: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:5000/data/" + id, value).then((res) => {
      console.log(res.data);
      navigation("/");
    });
  }

  useEffect(() => {
    axios.get("http://localhost:5000/data/" + id).then((val) => {
      setValue(val.data);
    })
  }, [id]);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}> 
      <h2 className={styles.title}>Update Place</h2>

      <label>Name</label>
      <input type="text" className={styles.input}
        value={value.name} 
        onChange={(e) => setValue({ ...value, name: e.target.value })} />

      <label>Description</label>
      <input type="text" className={styles.input}
        value={value.description} 
        onChange={(e) => setValue({ ...value, description: e.target.value })} />

      <label>Image</label>
      <input type="text" className={styles.input}
        value={value.image}
        onChange={(e) => setValue({ ...value, image: e.target.value })} />

      <label>Location</label>
      <input type="text" className={styles.input}
        value={value.location}
        onChange={(e) => setValue({ ...value, location: e.target.value })} />

      <label>Best Time</label>
      <input type="text" className={styles.input}
        value={value.besttime}
        onChange={(e) => setValue({ ...value, besttime: e.target.value })} />

      <label>Category</label>
      <select className={styles.select}
        value={value.category}
        onChange={(e) => setValue({ ...value, category: e.target.value })}>
        <option value="">Select category</option>
        <option value="hillstation">Hill Station</option>
        <option value="temple">Temple</option>
        <option value="beaches">Beaches</option>
        <option value="touristplace">Tourist Place</option>
      </select>

      <button type='submit' className={styles.submitBtn}>Update</button>
      <Link to="/" className={styles.cancelBtn}>Cancel</Link>
    </form>
  );
};

export default DataUpdate;
