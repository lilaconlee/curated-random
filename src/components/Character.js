import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.enabled}</div>
      </div>
    );
  }
}

export default Character;
