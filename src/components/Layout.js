import React from "react";

import CharacterSelection from "./CharacterSelection";

function View(props) {
  const updating = props.update;

  if (updating) {
    return <CharacterSelection />
  }
  return null;
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
  }

  componentWillMount = () => {
    const foo = window.localStorage.getItem(this.props.characters[0]);
    if (!foo) {
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    this.props.characters.forEach((character) => {
      window.localStorage.setItem(character, true);
    });
  }

  toggleUpdate = () => {
    this.setState({
      update: !this.state.update
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleUpdate}>Update</button>
        <View update={this.state.update} characters={this.props.characters}/>
      </div>
    );
  }
}

export default Layout;
