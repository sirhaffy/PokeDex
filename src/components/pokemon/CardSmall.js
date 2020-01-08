import React from "react";
import { render } from "react-dom";
import axios from "axios";

export default class CardSmall extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make this work in the callback.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Change the Pokemon !');
  }

  render() {
    return (
      <div className="PokemonCardOuter CardShadow" onClick={this.handleClick}>
        <div className="PokemonCardInner">
          <div className="Center Clearfix">
            <div className="ImgContainer">
              <img alt="" src="" />
            </div>
          </div>

          <h3>Pokemon Name</h3>

          <p>
            <b>Abilities:</b> 
          </p>
          <p>
            <b>Types:</b> 
          </p>
        </div>
      </div>
    );
  }
}
