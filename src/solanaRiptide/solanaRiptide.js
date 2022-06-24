import { Component } from "react";
import "./solanaRiptide.css";
import vyperPNG from "../assets/images/vyper-screen.png";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div class="container-fluid ">
          <div className="container d-flex justify-content-left">
            <div className=" small-box ">
              <h1 className=" d-flex justify-content-left ">
                <b>Vyper for Solana Riptide Hackathon</b>
              </h1>
              <p>
                For the 2022 Solana Riptide hackathon i worked on Vyper. A
                tranching primitive on Solana! I did lots of cool frontend
                development. Sadly we did not win, but the Vyper guys are still
                going.
              </p>
              <div style={{ width: 1000, height: 500, margin: 40 }}>
                <img width={1000} height={500} src={vyperPNG} alt="" />
              </div>
              <div className="big-padding">
                <a href="https://vyper-mktg-web.netlify.app/">
                  <button className="btn btn-secondary btn-lg-stripe space-buttons">
                    Preview
                  </button>
                </a>
                <a href="https://solana.com/riptide/voting/vyper-protocol-permissionless-tranching">
                  <button className="btn btn-secondary btn-lg-stripe space-buttons">
                    Voting
                  </button>
                </a>
              </div>
              <h5>
                <b>Technology</b>
              </h5>
              <div className="container small-padding">
                <ul>
                  <li>
                    <p>
                      <b>Front-end:</b> React, Next.js
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Tools:</b> Stripe, Git, Vercel
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
