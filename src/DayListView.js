import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DayCard from './DayCard';

class DayListView extends Component {

  render() {
    let dayOrderInYear= [];

    for (let i = 1; i < 366; i++) {
      dayOrderInYear.push(i);
    }

    return (
      <div className="dayListView-generalContainer">

        <div className="access-to-editionView">
          <Link className="prueba" to='/editionView'> + </Link>
        </div>

        <ol className="dayListView">
          {this.props.dayData.map(x => (
              <DayCard key={x.date}
                       date={x.date}
                       dayType={x.dayType} />
          ))}
        </ol>
      </div>
    );
  }
}

export default DayListView;
