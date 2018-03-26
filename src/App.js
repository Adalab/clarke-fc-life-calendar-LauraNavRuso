import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import DayListView from './DayListView';
import EditionView from './EditionView';

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
    this.handleChangeRadioInput = this.handleChangeRadioInput.bind(this);
    this.clearFormInputs = this.clearFormInputs.bind(this);
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

  componentWillMount(nextProps, nextState){
    localStorage.getItem('dayData') && this.setState ({
      dayData: JSON.parse(localStorage.getItem('dayData')),
    });
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('dayData', JSON.stringify(nextState.dayData));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Good/bad-day calendar</h1>
        </header>

        <EditionView handleClickSaveButton={this.handleClickSaveButton}
                      clearFormInputs={this.clearFormInputs}
                      handleChangeRadioInput={this.handleChangeRadioInput}/>

        <DayListView dayData={this.state.dayData} />

      </div>
    );
  }
}

export default App;


    // DayCard.defaultProps = {
    //   color: 'blue'
    // }


    // getDayOrderInYearFromDate() {
    //   var now = new Date();
    //   var start = new Date(now.getFullYear(), 0, 0);
    //   var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    //   var oneDay = 1000 * 60 * 60 * 24;
    //   var day = Math.floor(diff / oneDay);
    //
    //   console.log('Day of year: ' + day);
    //   console.log(now);
    //
    // }
