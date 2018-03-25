import React, { Component } from 'react';
import DayCard from './DayCard';

class App extends Component {
  render() {

    let dayOrderInYear= [];

    for (let i = 1; i < 366; i++) {
      dayOrderInYear.push(i);
    }

    console.log(dayOrderInYear);

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Good/bad-day calendar</h1>
        </header>

        <div className="access-to-editionView">+


        </div>


        <div className="calendar">



          {dayOrderInYear.map(x => (
              <DayCard manolito={`${x}`} />
          ))}




          <div className="calendar-day">
            hola
          </div>

          <div className="calendar-day">
            hola
          </div>

          <div className="calendar-day">
            hola
          </div>

          <div className="calendar-day">
            hola
          </div>
        </div>






      </div>
    );
  }
}

export default App;

// dayOrderInYear.map(x => (
//   <DayCard key={x}   />
//
// ))
