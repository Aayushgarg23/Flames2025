import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="bg-blue-500 text-white p-4 flex justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
        
        </>
    )
}

export default Navbar;
