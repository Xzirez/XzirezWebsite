import { Component } from "react";
import "./lier.css";
import lier1 from "../assets/images/lier.png";

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
                From 2019-2020 i developed an internal task tracker for the
                Municipal Lier. The application is mainly used for personal
                partaking in traning for their role or seminars. The application
                was made because the employees had issues knowing what training
                was avaliable at what time and date, aswell as what training was
                mandtory or not. The application was rolled out october 2020 and
                is currently being used by all nurses in Lier. It will be
                avaliable to other staff members at a later stage.
              </p>
              <p>
                I developed, designed and deployed the application myself. The
                application was made using Ionic Angular, Node.JS, AWS,
                Serverless. The application uses an Aurora database, Lamdba
                microservices and an API gateway. I use IAMRoles actively to
                delegate access to the application and the OAuth protocol for
                access.{" "}
              </p>
              <img className="widthImage" src={lier1}></img>

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
                      <b>Backend:</b> Node.JS, Serverless, Lambda, API Gateway,
                      SQS, Aurora
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Cloud:</b>AWS
                    </p>
                  </li>
                </ul>
              </div>
              <h3>Deployment</h3>
              <p>
                The application was deployed to both app store and android play
                store. It uses access via account. No one outside the
                organization is allowed access due to sensitive information
                being stored.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
