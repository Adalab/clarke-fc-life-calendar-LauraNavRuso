import React, { Component } from 'react';

class DayCard extends Component {
  render() {
    return (
      <li className={`calendar-day calendar-day${this.props.date} calendar-day-${this.props.dayType}`}>

        {this.props.date}

      </li>
    );
  }
}

export default DayCard;
