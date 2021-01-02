import { Component } from "react";
import './stripeApp.css';
import millum1 from '../assets/images/Screenshot 2020-12-08 at 20.41.37.png';
import millum2 from '../assets/images/Screenshot 2020-12-08 at 20.41.44.png';
import millum3 from '../assets/images/Screenshot 2020-12-08 at 20.41.57.png';

class About extends Component {

    render(){
        return(
            <div className="about">
                <div class="container-fluid ">
                <div className="container d-flex justify-content-left">
                    <div className=" small-box " >

                        <h1 className=" d-flex justify-content-left "><b>Small Ecommerce Application</b></h1>
                        <p>This application is a small hobby project that i am expanding on. The application is meant to be a sneakerstore that will be used once finished. The store is already run by the instagram account Sneakernerdsnl. Check out a preview by clicking below. </p>
                        <div className="small-padding">
                        <a href="https://sneaker-store.vercel.app/"><button className="btn btn-secondary btn-lg-stripe space-buttons">Preview</button></a> 
                        <a href="https://github.com/Xzirez/SneakerStore"><button className="btn btn-secondary btn-lg-stripe space-buttons">Code</button></a>
                            
                            </div>
                            <img src=""/>
                           <h5><b>Technology</b></h5>
                  <div className="container small-padding">
                   <ul>
                       <li>
                           <p><b>Front-end:</b> React, Next.js</p>
                       </li>
                       <li>
                       <p><b>Tools:</b> Stripe, Git, Vercel</p>
                       </li>


                   </ul>
                   </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    
}

export default About