import { Component } from "react"
import React from 'react'
import logo from "../assets/logo123.png" 
import './nav.css'

function  NavBar () {
   return (
            <nav> 
            <div className="innernav">
            <div id="left_side">
                <a href="#" className="nav_a">
                    <img className="logo" src={logo} alt="no image"></img>
                    <strong id="create">Create React App</strong>
                </a>
            
            </div>
            <div id="right_side">
                <ul>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Github</a></li>
                    <li><div className="slider">
                    <input type="checkbox" name="check"></input>
                    </div>
                    </li>
                    <li><div className="search">
                    <input type="text" className="search-button" placeholder="Search"></input>
                    </div>
                    </li>
                    
                </ul>
            </div>
            </div>
            </nav>
   )
   

}
export default NavBar