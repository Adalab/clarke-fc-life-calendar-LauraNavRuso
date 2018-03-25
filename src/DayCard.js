import React, { Component } from 'react';

class DayCard extends Component {
  render() {
    return (
      <div className={`calendar-day calendar-day${this.props.manolito}`}>

        Soy el elemento {this.props.manolito}

      </div>
    );
  }
}

export default DayCard;
