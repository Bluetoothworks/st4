import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About Me!" subtitle="This page is all about me and my work!"/>
        <div className="container">
          <h2>About</h2>
          <p>
            The vision of making this website wasn't very big, but with god's grace I am proud to showcase my state of art website
          </p>
          <p>
            There has been several hardships, like learning react router, sleepless nights, but all the hardwork paid off and I am proud of it.
          </p>
        </div>
      </div>
    );
  }
}

export default About
