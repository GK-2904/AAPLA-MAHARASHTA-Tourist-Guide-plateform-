
import axios from 'axios';
import React, { useState } from 'react'

const AdminLogin = () => {
 
    const [value,CheckValue]=useState({
            email:"",
            password:""
            
        });


        const handleSubmit= async (e)=>{

          e.preventDefault();

          try{

            const res = await axios.get("http://localhost:3000/admin");

            const admin = res .data.find(
              (a)=> a.email === value.email && a.password === value.password
            );

            if(admin){
              sessionStorage.setItem("isAdminLoggedIn","true");
              sessionStorage.setItem("adminEmail",admin.email)
              sessionStorage.setItem("adminPassword",admin.password)

              alert("login succssfull")

            }else{

              alert("invalid password & email")
            }

          } catch(error){

            console.error("error login in",error);
            alert("something went wrong")
            
            
          }


        

        }

  return (
   <form action="" onSubmit={handleSubmit}>

        <h1>Admin Login</h1>
     
     <label htmlFor="">email</label>
     <input type="text" value={value.email} onChange={(e)=>{CheckValue({...value, email: e.target.value})}} required /> <br /> <br />
      <label htmlFor="">password</label>
      <input type="text" value={value.password} onChange={(e)=>{CheckValue({...value, password: e.target.value})}} required /><br /><br />


      <button type='submit'>Submit</button>


 
    </form>
  )
}

export default AdminLogin