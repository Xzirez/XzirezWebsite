import { Component } from "react";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div class="container-fluid ">
          <div className="container d-flex justify-content-left">
            <div className=" small-box">
              <h1 className=" d-flex justify-content-left">
                <b>About</b>
              </h1>
              <h3>
                <b>Coding</b>
              </h3>
              <p>
                👋 i am Vetle Stubberud. I am a Norwegian developer who
                specializes in Frontend Development, web3 and CI/CD.
              </p>
              <p>
                My main focus has been Frontend development. I started making
                apps quiet early in my study with a focus on cross platform
                frameworks suchs as React Native and Ionic. I worked as an app
                developer for <a href="https://www.felltech.com">Felltch</a>{" "}
                where i worked on a large IoT smart home application using
                Flutter and AWS. I currently work for{" "}
                <a href="https://www.zignaly.com">Zignaly</a> as a Fullstack
                Developer, where i make lots of cool stuff related to Crypto and
                Web3!
              </p>
              <p>
                I have 2 cloud certifications. AWS Solution Architect Assosciate
                and Azure Fundamentals. Currently i do little backend
                development, but i have a good grasp of AWS and DevOps pratices.
              </p>
              <h5>
                <b>Skills</b>
              </h5>
              <div className="container small-padding">
                <ul>
                  <li>
                    <p>
                      <b>Front-end:</b> Flutter, React, Angular, Ionic
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Back-end:</b> Node.JS
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Cloud:</b> AWS, Azure
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Other:</b> Linux, Bash
                    </p>
                  </li>
                </ul>
                <blockquote className="block">
                  <p>
                    ✉️ Interested in working together? Contact Me:
                    vetle.stubberud@gmail.com
                  </p>
                </blockquote>
              </div>
              <h3>Esports</h3>
              <p>
                Before i started programming i was actively involved in Esports
                and played professionally for Flow Esports and TDG. I was in the
                top 50 global for the hearthstone circuit 2017 and finished in
                top 10 several seasons. I played in many big international
                events such as HGG, IeSF, Dreamhack, Insomnia and HGC. If you
                wish to know more i will provide some links below:
              </p>
              <h4>Links</h4>

              <ul>
                <a href="https://www.youtube.com/watch?v=d1c6Ow3ccrw">
                  <p>Main Stage at insomnia</p>
                </a>
              </ul>
              <ul>
                <a href="https://www.pokernews.com/news/2016/12/888poker-and-flow-esports-join-forces-26527.htm">
                  <p>888Poker Sponsorship</p>
                </a>
              </ul>
              <ul>
                <a href="https://www.youtube.com/watch?v=dABOr_4PrJY">
                  <p>Dreamhack Valencia</p>
                </a>
              </ul>

              <h2>
                <b>Personal Interests</b>
              </h2>
              <p>
                Besides my passion for coding Im invested in several hobbies.
                Gaming or Esports is one. I am also into investing, philosophy,
                language, psychology, poker and politics. I have read most of
                the classic litterature ranging Adam Smith to Marx to Nietzsche
                to Kirkegaard. I wanted to study psychology and i am still quiet
                invested in the declining science of psychology.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
