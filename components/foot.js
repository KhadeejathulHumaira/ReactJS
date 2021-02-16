import React from 'react'
import './foot.css'
import oss from '../assets/oss_logo.png'
function Footer()
{
    return(<footer className="footer_container">
            <div className="cont1">
            <div className="cont2">
            <div className="foot_col1">
                <h4>Docs</h4>
                <ul>
                    <li>Get Started</li>
                    <li>Learn React</li>
                </ul>
            </div>
            <div className="foot_col2">
            <h4>Community</h4>
                <ul>
                    <li>Stack Overflow</li>
                    <li>Github Discussion</li>
                    <li>Twitter</li>
                    <li>Contributor Convenant</li>
                </ul>
            </div>
            <div className="foot_col3">
            <h4>Social</h4>
            <ul>
                <li>Github</li>
            </ul>
            </div>
            </div>
            <div className="footer_img">
             <img className="oss_img" src={oss} ></img>   
        </div>
        <div className="bottom">
        Copyright © 2021 Facebook, Inc.
        </div>
            </div>
      
        </footer>)
}
export default Footer