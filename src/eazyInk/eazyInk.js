import { Component } from "react";
import './eazyInk.css';
import millum1 from '../assets/images/Screenshot 2020-12-08 at 20.41.37.png';
import millum2 from '../assets/images/Screenshot 2020-12-08 at 20.41.44.png';
import millum3 from '../assets/images/Screenshot 2020-12-08 at 20.41.57.png';

class About extends Component {

    render(){
        return(
            <div className="about">
                <div class="container-fluid ">
                <div className="container d-flex justify-content-left">
                    <div className=" small-box" >

                        <h1 className=" d-flex justify-content-left"><b>Startup - Linework - CTO</b></h1>
                        <p>I have a startup project called Linework where i function as a CTO. The project has been running for 2 years and is currently being outsourced. We are creating an ERP platform for tattoo artists where artists can do book keeping, schedule appointment, transactions and funding of tattoos. The project has currently developed an MVP and is starting to gather funding for the second time. For more information on this shoot me an email at vetle.stubberud@gmail.com. 
                           </p>

                            <h4>Links</h4>
                            <a href="https://finansavisen.no/lordag/gruenderintervjuet/2020/03/27/7508138/kai-robin-ree-utvikler-nye-losninger-for-tatoveringsbransjen"> <h5>Article about the Project</h5></a>

                   </div>
                </div>
            </div>
            </div>
        )
    }
    
}

export default About