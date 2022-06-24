import { Component } from "react";
import "./bachelor.css";
import millum1 from "../assets/images/Screenshot 2020-12-08 at 20.41.37.png";
import millum2 from "../assets/images/Screenshot 2020-12-08 at 20.41.44.png";
import millum3 from "../assets/images/Screenshot 2020-12-08 at 20.41.57.png";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div class="container-fluid ">
          <div className="container d-flex justify-content-left">
            <div className=" small-box">
              <h1 className=" d-flex justify-content-left">
                <b>Mobile Application - Ionic Angular</b>
              </h1>
              <p>
                As part of my bachelors project i took part in a group project
                were we for 6 months developed a mobile application for{" "}
                <a href="https://www.millum.no/">Millum</a>. Millum delivers a
                procurment solution for the food production industry. My group
                had the responsibility of developing a mobile storage counting
                application their employees could use to count goods stored in
                their storages. This was a big release for Millum and is one of
                their main advantages on the market compared to other
                procurement solutions in scandinavia as no other company has a
                good storage counting application.
              </p>
              <p>
                We developed and designed an application written in the hybrid
                framework Ionic Angular. We had to use Millums internal
                Microsoft Devops solution to review, push and pull code aswell
                as tasks.
              </p>
              <img className="widthImage" src={millum1}></img>
              <img className="widthImage" src={millum2}></img>
              <img className="widthImage" src={millum3}></img>

              <h5>
                <b>Technology</b>
              </h5>
              <div className="container small-padding">
                <ul>
                  <li>
                    <p>
                      <b>Front-end:</b> Angular, Ionic
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Tools:</b> Git, Microsoft Devops, Adobe XD, Linux
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Cloud:</b>Azure
                    </p>
                  </li>
                </ul>
              </div>
              <h5>
                <b>SCRUM</b>
              </h5>
              <div className="container small-padding">
                <p>
                  We followed a SCRUM methodology. SCRUM is built on the Agile
                  philosophy, which is the current dominating project managment
                  style. We worked in interations called sprints utilizing
                  technniques such as daily standups and product backlog. Each
                  Sprint a MVP would be showcased to the product owner for
                  approval. Feedback would then be incorporated into the next
                  sprint.{" "}
                </p>
                <blockquote className="block">
                  <p>To read more about SCRUM concept visit my Dev.to</p>
                </blockquote>
              </div>
              <h3>Deployment</h3>
              <p>
                The application was deployed to both app store and android play
                store at{" "}
                <a href="https://apps.apple.com/in/app/millum-varetelling/id1520363757">
                  Millum Varetelling
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
