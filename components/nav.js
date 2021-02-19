import { Component} from "react"
import React from 'react'
import logo from "../assets/logo123.png" 
import './nav.css'


class  NavBar extends Component {
    constructor(){
        super()
        this.state={
           display:'none'
        }
    }
    changeVisibility(){
        this.setState({
            display:'block'
        })
    }
    changeVisibility2(){
        this.setState({
           display:'none'
        })
    }

    render(){
   return (
            <nav> 
            <div className="innernav">
            <div id="left_side">
                <a href="#" className="nav_a">
                    <div id="toggle">
                    <button  className="button1"  onClick={() => this.changeVisibility()}>☰</button>
                    </div>
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
            <div className="side_navbar" style={this.state}>
            <div className="top">
            <a className="side_nav_a">
            <img className="logo1" onClick={() => this.changeVisibility2()} src={logo} alt="no image"></img>
            <strong id="create1">Create React App</strong>
            <div className="slider1">
            <input type="checkbox" name="check"></input>
            </div>
            </a>
            </div>
            <div className="menu_bar">
                <ul>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Github</a></li>
                </ul>
            </div>
            </div>

            </nav>
   )
    }

}
export default NavBar