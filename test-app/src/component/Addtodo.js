import React, { Component } from "react";
import "../App.css";

export default class Addtodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  stylingInputText = () => {
    return {
      width: "75%",
      height: "25px",
      margin: "15px 0px",
      fontFamily: "Arial, Helvetica, sans-serif"
    };
  };
  stylingSubmitButton = () => {
    return {
      height: "25px",
      width: "50px",
      borderStyle: "solid",
      borderColor: "red"
    };
  };
  update(e) {
    //store the value of the textfield in the state
    this.setState({
      text: e.target.value
    });
  }
  addTodo() {
    //when user presses button, pass the text of the text field to the parent and reset the text field to empty
    this.props.addTodo(this.state.text);
    this.setState({
      text: ""
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.addTodo.bind(this)}>
          <input
            style={this.stylingInputText()}
            type="text"
            value={this.state.text}
            placeholder="What do you want to do?"
            onChange={this.update.bind(this)}
          />
          <input
            style={this.stylingSubmitButton()}
            type="submit"
            value="Add todo"
          />
        </form>
      </div>
    );
  }
}
