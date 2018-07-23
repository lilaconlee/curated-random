import React from 'react';

import CharacterRow from './CharacterRow';

import './CharacterSelection.scss';

class CharacterSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!window) { return <div></div> }

    const charRows = this.props.characters.map((character) => {
      return <CharacterRow key={character} name={character} enabled={window.localStorage.getItem(character) === 'true'}/>
    });

    return (
      <div className="selection-container">
        <div>{charRows}</div>
        <button className="selection-button" onClick={this.props.onUpdate}>done updating</button>
      </div>
    );
  }
}

export default CharacterSelection;
