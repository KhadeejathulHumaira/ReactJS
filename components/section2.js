import React from 'react'
import './section2.css'
function Section2()
{
    return <section className="section2">
            <div className="container">
                <div className="col1">
                    <h2 className="col1_heading">Less to Learn</h2>
                    <p className="col1_para">You don't need to learn and configure many build tools. 
                    Instant reloads help you focus on development. 
                    When it's time to deploy, your bundles are optimized automatically.</p>
                </div>
                <div className="col2">
                <h2 className="col2_heading">Only One Dependency</h2>
                    <p className="col2_para">Your app only needs one build dependency.
                     We test Create React App to make sure that all of its underlying 
                     pieces work together seamlessly – no complicated version mismatches.</p>
                </div>
                <div className="col3">
                <h2 className="col3_heading">No Lock-In</h2>
                    <p className="col3_para">Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app.
                     If you ever want an advanced configuration, 
                     you can ”eject” from Create React App and edit their config files directly.
            </p>
                </div>

            </div>

    </section>
}
export default Section2