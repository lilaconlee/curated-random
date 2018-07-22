import React from 'react';

import CharacterRow from './CharacterRow';

class CharacterSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const charRows = this.props.characters.map((character) => {
      return <CharacterRow key={character} name={character} enabled={window.localStorage.getItem(character) === 'true'}/>
    });

    return (
      <div>
        {charRows}
        <button onClick={this.props.onUpdate}>done updating</button>
      </div>
    );
  }
}

export default CharacterSelection;
