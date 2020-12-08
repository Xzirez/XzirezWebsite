import { Component } from "react";
import './home.css';
import imageUrl from '../assets/images/headshot.png';
import {Button} from '../components/button/button';
class Home extends Component {
    
    
    render() {
        

        return(
        <div className="Home">
            <div class="container-fluid d-flex justify-content-center big-box">
                <div className="container d-flex justify-content-center">
                    <div className="d-flex flex-column  small-box" >
                        <img className="small-padding headshot" src={imageUrl}></img>
                        <h2 className="">Vetle Stubberud</h2>
                        <h3 className="small-padding">Software Engineer</h3>
                        <a href="/about"><button  className="btn btn-secondary btn-lg space-buttons">About Me</button></a>
                        <a href="/projects"><button   className="btn btn-secondary btn-lg space-buttons">Projects</button></a>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Home;