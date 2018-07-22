import React from "react";

import Character from "./Character";

class CharacterSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const char = 'Bayonetta';
    const charEnabled = localStorage.getItem(char);

    return <Character name={char} enabled={charEnabled} />;
  }
}

export default CharacterSelection;
