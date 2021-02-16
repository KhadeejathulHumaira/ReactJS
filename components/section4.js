import React from 'react'
import './section4.css'
import update from '../assets/update.png'

function Section4 (){
    return (<section className="section4">
        <div className="section4_container">
            <div className="update_img_div">
            <img src={update} className="update_img"></img>
            </div>
            <div className="right_side_content">
                <h2>Easy to Maintain</h2>
                <p className="update_content">
                Updating your build tooling is typically a daunting and time-consuming task. 
                When new versions of Create React App are released, you can upgrade using a single command:
                </p>
                <p className="latest">npm install react-scripts@latest</p>
            </div>
        </div>
    </section>

    )
}
export default Section4