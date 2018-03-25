import React, { Component } from 'react';
import DayCard from './DayCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "",
      dayType: "",
      happyMsg: "",
      dayData: []
    };

    this.handleClickSaveButton = this.handleClickSaveButton.bind(this);
    this.clearAndDisableMsgTextarea = this.clearAndDisableMsgTextarea.bind(this);
    this.handleChangeRadioInput = this.handleChangeRadioInput.bind(this);
  }

  handleClickSaveButton() {
    this.saveDayData();
    this.clearFormInputs();
    this.enableMsgTextarea();
  }

  saveDayData() {
    const date = document.querySelector('.date-input').value;
    const dayType = document.querySelector('input[name="options"]:checked').value;
    const happyMsg = document.querySelector('.happyMsg-input').value;

    this.setState({
      date: date,
      dayType: dayType,
      happyMsg: happyMsg,
      dayData:[...this.state.dayData, {date, dayType, happyMsg}]
    });
  }

  clearFormInputs() {
    document.querySelector('.date-input').value = "";
    document.querySelector('input[name="options"]:checked').checked = false;
    document.querySelector('.happyMsg-input').value = "";
  }

  enableMsgTextarea() {
    document.getElementById("happyMsg-input").disabled = false;
  }

  handleChangeRadioInput() {
    if (document.querySelector('input[name="options"]:checked').value === "bad") {
        this.clearAndDisableMsgTextarea();
    }
  }

  clearAndDisableMsgTextarea() {
    document.querySelector('.happyMsg-input').value = "";
    document.getElementById("happyMsg-input").disabled = true;
  }


  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('dayData', JSON.stringify(nextState.dayData));
  }

  componentWillMount(nextProps, nextState){
    localStorage.getItem('dayData') && this.setState ({
      dayData: JSON.parse(localStorage.getItem('dayData')),
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
                <li><label htmlFor="good"><input type="radio" value="good" id="good" name="options" onChange={this.handleChangeRadioInput} /> Día bueno</label></li>
                <li><label htmlFor="bad"><input type="radio" value="bad" id="bad" name="options" onChange={this.handleChangeRadioInput} /> Día malo</label></li>
              </ul>

            <label htmlFor="happyMsg-input" className="label-for-happyMsg-input">Mensaje</label>
            <textarea id="happyMsg-input" className="happyMsg-input" cols="50" placeholder="¿Por qué es un buen día? (explica sólo cosas alegres; nadie quiere escuchar tus penas)"></textarea>

          </form>

          <div className="editionView-buttons">
            <button className="editionView-saveButton" onClick={this.handleClickSaveButton} >Guardar</button>
            <button className="editionView-cancelButton" onClick={this.clearFormInputs} >Cancelar</button>
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


    // DayCard.defaultProps = {
    //   color: 'blue'
    // }




    // saveDayData() {
    //   const date = this.state.date;
    //   const dayType = this.state.dayType;
    //   const happyMsg = this.state.happyMsg;
    //
    //   this.setState({
    //     date: document.querySelector('.date-input').value,
    //     dayType: document.querySelector('input[name="options"]:checked').value,
    //     happyMsg: document.querySelector('.happyMsg-input').value,
    //     dayData:[...this.state.dayData, {date, dayType, happyMsg}]
    //   });
    // }
