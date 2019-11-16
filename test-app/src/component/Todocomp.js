import React, { Component } from "react";

import "../App.css";

export default class Todocomp extends Component {
  stylingTodoComponent = () => {
    return {
      borderStyle: "solid",
      borderRadius: "15px",
      borderColor: "#3f4d71",
      margin: "10px 25%",
      textDecoration: this.props.todoObject.completed ? "line-through" : "none",
      overflow: "hidden",
      backgroundColor: "#3f4d71",
      fontSize: "19px"
    };
  };
  stylingText = () => {
    return {
      color: "#ffdc34"
    };
  };
  stylingDeleteButton = () => {
    return {
      height: "50px",
      width: "50px",
      border: "none",
      cursor: "pointer",
      color: "yellow",
      backgroundColor: "#55ae95"
    };
  };
  stylingDeleteButtonDiv = () => {
    return {
      height: "100%",
      float: "right"
    };
  };
  render() {
    const { id, task, completed } = this.props.todoObject;
    return (
      <div style={this.stylingTodoComponent()} className="todoComponent">
        <span className="outerSpan">
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.changeComplete.bind(this, id)}
          />
          <span style={this.stylingText()}> {task}</span>
        </span>
        <div style={this.stylingDeleteButtonDiv()}>
          <button
            style={this.stylingDeleteButton()}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            DEL
          </button>
        </div>
      </div>
    );
  }
}
