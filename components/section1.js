import React from 'react'
import logo from "../assets/logo123.png" 
import './section1.css'
function Section1()
{
    return <section className="section1">
            <img className="section1_img" src={logo} alt="unavailable"></img>
            <h1 className="sec1_tittle">Create React App</h1>
            <p className="sec1_txt">Set up a modern web app by running one command</p>
            <button className="btn" >Get Started</button>
            </section>
        
       
}
export  default Section1