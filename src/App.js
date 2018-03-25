import React, { Component } from 'react';
import DayCard from './DayCard';

class App extends Component {
  render() {

    let dayOrderInYear= [];

    for (let i = 1; i < 366; i++) {
      dayOrderInYear.push(i);
    }

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Good/bad-day calendar</h1>
        </header>


        <div className="access-to-editionView">+
        </div>

        <div className="editionView">

        </div>


        <ol className="calendar">
          {dayOrderInYear.map(x => (
              <DayCard key={x}
                       dayOrder={`${x}`} />
          ))}

        </ol>
      </div>
    );
  }
}

export default App;

// dayOrderInYear.map(x => (
//   <DayCard key={x}   />
//
// ))
