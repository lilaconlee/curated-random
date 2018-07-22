import React from "react";

function randArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getEnabledCharacters() {
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
      <div>
        <div>{this.state.character}</div>
        <button onClick={this.props.onUpdate}>update</button>
        <button onClick={this.setNewCharacter}>new character</button>
      </div>
    );
  }
}

export default Randomizer;
