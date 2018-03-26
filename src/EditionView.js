import React, { Component } from 'react';

class EditionView extends Component {

  render() {
    return (
      <div className="editionView-generalContainer">
        <form className="editonView-form">
          <label htmlFor="date-input" className="label-for-date-input">Fecha</label>
          <input type="date" id="date-input" className="date-input"></input>

          <h3 className="dayState-title">Estado</h3>
            <ul className="editionView-dayState">
              <li><label htmlFor="good"><input type="radio" value="good" id="good" name="options" onChange={this.props.handleChangeRadioInput} /> Día bueno</label></li>
              <li><label htmlFor="bad"><input type="radio" value="bad" id="bad" name="options" onChange={this.props.handleChangeRadioInput} /> Día malo</label></li>
            </ul>

          <label htmlFor="happyMsg-input" className="label-for-happyMsg-input">Mensaje</label>
          <textarea id="happyMsg-input" className="happyMsg-input" cols="50" placeholder="¿Por qué es un buen día? (explica sólo cosas alegres; nadie quiere escuchar tus penas)"></textarea>

        </form>

        <div className="editionView-buttons">
          <button className="editionView-saveButton" onClick={this.props.handleClickSaveButton} >Guardar</button>
          <button className="editionView-cancelButton" onClick={this.props.clearFormInputs} >Cancelar</button>
        </div>
      </div>
    );
  }
}

export default EditionView;
