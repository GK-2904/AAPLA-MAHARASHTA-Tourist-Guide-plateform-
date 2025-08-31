
import axios from 'axios';
import React, { useState } from 'react'



const AdminRegistration = () => {
    
    const [value,setValue]=useState({
        name:"",
        email:"",
        password:"",
        contact:""
    });

    function handleSubmit(e){
      e.preventDefault()
        

        axios.post("http://localhost:3000/admin",value).then((res)=>{
            console.log(res.data);
            
        })
    }


  
  return (
      
 <>
    <form action="" onSubmit={handleSubmit}>

        <h1>Admin Registration</h1>
     
     <label htmlFor="">name</label>
     <input type="text" value={value.name} onChange={(e)=>{setValue({...value, name: e.target.value})}}/> <br /> <br />
      <label htmlFor="">email</label>
      <input type="text" value={value.email} onChange={(e)=>{setValue({...value, email: e.target.value})}}/><br /> <br />
      <label htmlFor="">password</label>
      <input type="text" value={value.password} onChange={(e)=>{setValue({...value, password: e.target.value})}}/><br /><br />
      <label htmlFor="">contct</label>
      <input type="text" value={value.contact} onChange={(e)=>{setValue({...value, contact: e.target.value})}} /> <br /> <br />

      <button type='submit'>Submit</button>
     
    

 
    </form>
 
 
 </>

    
  )
}

export default AdminRegistration