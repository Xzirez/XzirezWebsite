import { Component } from "react";
import "./projects.css";
import Cards from "../components/cards/Cards";
class Projects extends Component {
  render() {
    return (
      <div className="about">
        <Cards />
      </div>
    );
  }
}

export default Projects;
