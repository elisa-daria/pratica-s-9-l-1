import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.image}
        alt={this.props.imageAlt}
        className="App-logo"
      ></img>
    );
  }
}

export default ImageComponent;
