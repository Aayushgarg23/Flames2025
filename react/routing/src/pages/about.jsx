import React from "react";
import { useNavigate } from "react-router-dom";

function About(){

    const navigate =useNavigate();
    const handlesubmit =()=>{
        alert("Message sent successfully");
        navigate("/");
    }
    return(
        <>
        <h1 className="text-3xl font-bold text-blue-500">Welcome to the About Page</h1>

        <button onClick={handlesubmit} className="bg-purple-500 text-white p-2 rounded-md space-x-2"> Click me </button>
</>
    )
    
}

export default About;