import React from "react";
import { render } from "react-dom";

export default class CardSmall extends React.Component {

  render() {
    return (
      <div className="PokemonCardOuter CardShadow" onClick={this.props.cardClicked}>
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
