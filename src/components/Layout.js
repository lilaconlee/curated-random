import React from 'react';

import CharacterSelection from './CharacterSelection';
import Randomizer from './Randomizer';

function View(props) {
  const updating = props.update;

  if (updating) {
    return <CharacterSelection onUpdate={props.onUpdate} characters={props.characters}/>
  }

  return <Randomizer onUpdate={props.onUpdate} />;
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
  }

  componentWillMount = () => {
    const testValue = window.localStorage.getItem(this.props.characters[0]);
    if (!testValue) {
      this.setState({update: true});
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
      <View update={this.state.update} onUpdate={this.toggleUpdate} characters={this.props.characters}/>
    );
  }
}

export default Layout;
