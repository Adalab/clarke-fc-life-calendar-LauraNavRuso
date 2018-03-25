import React, { Component } from 'react';

class DayCard extends Component {
  render() {
    return (
      <li className={`calendar-day calendar-day${this.props.dayOrder}`}>

        Día {this.props.dayOrder}

      </li>
    );
  }
}

export default DayCard;
