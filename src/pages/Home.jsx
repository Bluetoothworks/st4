import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="This is my website" />
        <div className="container">
          <h2>Study on Russia VS Ukraine</h2>
          <img src='https://i.ytimg.com/vi/ZyoAgJUx1yo/maxresdefault.jpg' />
          <p>
          On 24 February 2022, Russia invaded Ukraine in a major escalation of the Russo-Ukrainian War, which began in 2014. The invasion has likely resulted in tens of thousands of deaths on both sides and caused Europe's largest refugee crisis since World War II, with an estimated 8 million people being displaced within the country by late May as well as 7.6 million Ukrainians fleeing the country as of 3 October 2022. Within five weeks of the invasion, Russia experienced its greatest emigration since the 1917 October Revolution.The invasion has also caused global food shortages.
          </p>
          <p>
          The invasion began on the morning of 24 February, when Russian president Vladimir Putin announced in his public address a "special military operation" for the "demilitarisation and denazification" of Ukraine. In his address, Putin espoused irredentist views, challenged Ukraine's right to statehood, and falsely claimed Ukraine was governed by neo-Nazis who persecuted the ethnic Russian minority. Minutes later, missiles, rockets and airstrikes hit across Ukraine, including the capital Kyiv, followed by a large ground invasion from multiple directions. Ukrainian president Volodymyr Zelenskyy enacted martial law and a general mobilisation.Russian attacks were initially launched on a northern front from Belarus towards Kyiv, a north-eastern front towards Kharkiv, a southern front from Crimea, and a south-eastern front from Luhansk and Donetsk.Russia's advance towards Kyiv stalled in March, with Russian troops retreating from the northern front by April. On the southern and south-eastern fronts, Russia captured Kherson in March and then Mariupol in May after a siege. On 19 April, Russia launched a renewed attack on the Donbas region, with Luhansk Oblast fully captured by 3 July. Russian forces continued to bomb both military and civilian targets far from the frontline. Ukrainian forces launched counteroffensives in the south in August, and in the northeast in September. Soon after, Russia annexed Luhansk and the three partially occupied Ukrainian oblasts of Donetsk, Zaporizhzhia and Kherson.
          </p>
        </div>
      </div>
    );
  }
}

export default Home
