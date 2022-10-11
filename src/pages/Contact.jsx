import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact" subtitle="Please contact me at abc@def.in"/>
        <div className="container">
          <h2>Contact</h2>
          <p>
            My number is 1234567890
          </p>
          <p>
            It is suggested to call on this number only in emergency. p.s.- Dont call me.
          </p>
        </div>

      </div>
    );
  }
}

export default About
