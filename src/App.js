import React, { Component } from 'react';
import DayCard from './DayCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "",
      dayType: "",
      happyMsg: ""
    };

    this.saveDayType = this.saveDayType.bind(this);
  }

  saveDayType(e) {


    this.setState({
      date: document.querySelector('.date-input').value,
      dayType: e.currentTarget.value,
      happyMsg: document.querySelector('.happyMsg-input').value
    });
  }



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
          <form className="editonView-form">
            <label htmlFor="date-input" className="label-for-date-input">Fecha</label>
            <input type="date" id="date-input" className="date-input"></input>

            <h3 className="dayState-title">Estado</h3>
              <ul className="editionView-dayState">
                <li><label htmlFor="good"><input type="radio" value="good" id="good" name="options" onChange={this.saveDayType}/> Día bueno</label></li>
                <li><label htmlFor="bad"><input type="radio" value="bad" id="bad" name="options" onChange={this.saveDayType} /> Día malo</label></li>
              </ul>

            <label htmlFor="happyMsg-input" className="label-for-happyMsg-input">Mensaje</label>
            <textarea id="happyMsg-input" className="happyMsg-input" cols="30" placeholder="¿Por qué es un buen día?"></textarea>
          </form>

          <div className="editionView-buttons">
            <button className="editionView-saveButton">Guardar</button>
            <button className="editionView-cancelButton">Cancelar</button>
          </div>
        </div>

        <ol className="dayListView">
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

    // var selectedDayType = document.querySelector('input[name="options"]:checked').value;
