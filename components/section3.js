import react from 'react'
import './section3.css'
import ios from '../assets/ioscode.svg'


function Section3()
{
    return ( <section className="section3">
        <div className="container_section3">
        <div className="left_side_content">
            <h2> Get started in seconds</h2>
            <p className="get_started_cont">Whether you’re using React or another library, 

                Create React App lets you<strong> focus on code, not build tools</strong>.
                <br></br>
                <br></br>
                To create a project called my-app, run this command:</p>
                <div className="left_side_block">
            <p>npx create-react-app my-app</p>
            </div>
        </div>
        <div className="command_img1">
            <img  className="command_img" src={ios}></img>

        </div>
        </div>
    
        
        </section> )
}
export default Section3