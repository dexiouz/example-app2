import React, { Component } from "react";
import Header from "./Header";
class Likes extends Component {
  state = {
    likes: 0
  };
  increaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };
  decreaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes - 1
      };
    });
  };
  resetLikes = () => {
    this.setState({ likes: 0 });
  };
  render() {
    return (
      <div>
        <Header title="Likes Counter" />
        <h1>Welcome to my Likes App</h1>
        <h3>Likes: {this.state.likes}</h3>
        <button onClick={this.increaseLikes}>like</button>
        <button onClick={this.decreaseLikes}>unlike</button>
        <button onClick={this.resetLikes}>reset</button>
      </div>
    );
  }
}

export default Likes;
