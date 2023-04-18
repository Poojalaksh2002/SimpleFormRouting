import React from 'react';
import axios from "axios";
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Greet(){
    const[email, setemail] = useState('')
    const[username,setusername] = useState('')
    const[showHome, setshowHome] = useState(false)
    console.log(email)
    console.log(username)

    const navigate = useNavigate(); 
    
const handleSubmit=(e)=>{
    e.preventDefault()
    alert('form submited')
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
       const res = response.data;
       console.log(res)
       const user = res.find((item)=>item.email===email && item.username===username)
       if(user){
        console.log('Success')
        alert(`Happy Login ${username}`)
        setshowHome(true)
         navigate (`/home/${user.name}`)
       
       }
       else{
        console.log('UnSuccess')
        alert(`Sorry ${username}`)
       }
       
    })
    }
    
    //  axios.post('https://jsonplaceholder.typicode.com/users',{email,username})
    //  .then(response=>console.log(response.data))
   
  

    return(
        <form onSubmit={handleSubmit}>
             <label>Email</label>
             <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='email'></input>
             <label>Username</label>
             <input type='text'value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'></input>
             <input className="btn btn-primary" type="submit" value="Submit"></input>
             {showHome &&(
                 <input className="btn btn-primary" type="submit" value="goHome" onClick={() => navigate('/home')}></input>

             )}


        </form>
       
    )
}
export default Greet;
