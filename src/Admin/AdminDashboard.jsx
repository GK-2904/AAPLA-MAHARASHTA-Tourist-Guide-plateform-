import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, } from 'react-router-dom'
import styles from '../CSS/AdminDashboard.module.css'



const AdminDashboard = () => {

    const navigation = useNavigate();

    const [data,setdata]= useState([])

   useEffect(()=>{

     axios.get("http://localhost:5000/data").then((val)=>{

      setdata(val.data)
      console.log(val.data);
      
    })

   },[])


       

function handleChange(){

    navigation("/create");
}

const ChangeDelete=((id)=>{

  const agree = confirm("are you sure")
 if(agree){


  axios.delete("http://localhost:5000/data/"+id).then((v)=>{

  window.location.reload(v)
})
 }


 


})



  return (
         

   <div className={styles.page}>


   <h1 className={styles.title}>Admin DashBoard</h1>
    <button onClick={handleChange}  className={styles.createBtn}> Create </button>

    <table className={styles.table}>
      <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>image</th>
            <th>location</th>
            <th>Best Time</th>
            <th>Category</th>
            <th>Action</th>


        </tr>
      </thead>

      <tbody>
        {data.map((place,index)=>(
          <tr key={index}>

            <td>{place.name}</td>
            <td>{place.description}</td>
            <td>{place.image}</td>
            <td>{place.location}</td>
            <td>{place.besttime}</td>
            <td>{place.category}</td>
            <td>
             
             <Link to={`/update/${place.id}`}  ><button className={styles.actionLink}>update</button></Link>
             <Link to={`/read/${place.id}`}  ><button className={styles.actionLink}>read</button></Link>
             <button onClick={() => ChangeDelete(place.id)}  className={styles.deleteBtn} >Delete</button>




            </td>



          </tr>
        ))}
      </tbody>
      
    </table>
   
   
   </div>
    
  )
}

export default AdminDashboard