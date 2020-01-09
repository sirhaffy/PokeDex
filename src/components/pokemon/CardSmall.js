import React from 'react';

export default class CardSmall extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    const { data } = this.props;

    return (
      <div className="PokemonCardOuter CardShadow" onClick={this.props.cardClicked}>
        <div className="PokemonCardInner">
          <div className="Center Clearfix">
            <div className="ImgContainer">
              <img alt="" src="" />
            </div>
          </div>

          <h3>{data.name}</h3>

          <p>
            <b>Abilities: {data.abilities}</b>
          </p>

          <p>
            <b>Types: {data.types}</b> 
          </p>
          
          {/*<pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>*/}
        </div>
      </div>
    );
  }
}