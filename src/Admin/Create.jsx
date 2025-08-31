import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from "../CSS/Create.module.css"; // 👈 import CSS module

const Create = () => {
  const navigation= useNavigate();

  const [data,setdata]=useState({
    name:"",
    description:"",
    image:"",
    location:"",
    besttime:"",
    category:""
  });

  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:5000/data",data).then((res)=>{
      console.log(res.data);
      navigation("/")
    });
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}> 
      <h2 className={styles.title}>Add New Place</h2>

      <label>Name</label>
      <input type="text" className={styles.input} 
        value={data.name} 
        onChange={(e) => setdata({ ...data, name: e.target.value })}/>

      <label>Description</label>
      <input type="text" className={styles.input}
        value={data.description} 
        onChange={(e) => setdata({ ...data, description: e.target.value })}/>

      <label>Image</label>
      <input type="text" className={styles.input}
        value={data.image}
        onChange={(e) => setdata({ ...data, image: e.target.value })} />

      <label>Location</label>
      <input type="text" className={styles.input}
        value={data.location}
        onChange={(e) => setdata({ ...data, location: e.target.value })} />

      <label>Best Time</label>
      <input type="text" className={styles.input}
        value={data.besttime}
        onChange={(e) => setdata({ ...data, besttime: e.target.value })} />

      <label>Category</label>
      <select className={styles.select}
        value={data.category}
        onChange={(e)=>setdata({ ...data, category:e.target.value})}>
        <option value="">Select category</option>
        <option value="hillstation">Hill Station</option>
        <option value="temple">Temple</option>
        <option value="beaches">Beaches</option>
        <option value="touristplace">Tourist Place</option>
      </select>

      <button type='submit' className={styles.submitBtn}>Submit</button>
      <Link to="/" className={styles.backLink}>← Back to Home</Link>
    </form>
  )
}

export default Create;
