import React from 'react';
import classNames from 'classnames';

import './CharacterRow.scss';

class CharacterRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: props.enabled
    };
  }

  getClassNames = () => {
    return classNames({
      character: true,
      disabled: !this.state.enabled
    });
  }

  toggleEnabled = () => {
    this.setState({
      enabled: !this.state.enabled
    });


    window.localStorage.setItem(this.props.name, !this.state.enabled);
  }

  render() {
    return (
      <div onClick={this.toggleEnabled} style={{padding: '20px'}} className={this.getClassNames()}>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default CharacterRow;
