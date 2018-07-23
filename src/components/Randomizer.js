import React from 'react';

import './Randomizer.scss';

function randArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getEnabledCharacters() {
  if (typeof window === 'undefined') { return []; }

  const enabledCharacters = Object.keys(window.localStorage).filter((item) => {
    return window.localStorage.getItem(item) === 'true';
  });

  return enabledCharacters;
}

class Randomizer extends React.Component {
  componentWillMount() {
    this.setState({
      character: randArray(getEnabledCharacters())
    });
  }

  setNewCharacter = () => {
    this.setState({
      character: randArray(getEnabledCharacters())
    });
  }

  render() {
    return (
      <div className="randomizer-container">
        <div className="randomizer-text-container">
          <h1 className="randomizer-character">{this.state.character}</h1>
        </div>
        <div className="randomizer-button-container">
          <button className="randomizer-button randomizer-button-border" onClick={this.props.onUpdate}>update</button>
          <button className="randomizer-button" onClick={this.setNewCharacter}>new character</button>
        </div>
      </div>
    );
  }
}

export default Randomizer;
