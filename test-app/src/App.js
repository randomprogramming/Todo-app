import React, { Component } from "react";

import "./App.css";
import Todocomp from "./component/Todocomp";
import Addtodo from "./component/Addtodo";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    this.update();
  }
  update = async () => {
    //gets all todos from database and updates the state
    await fetch("http://localhost:8080/api/getalltodos")
      .then(res => res.json())
      .then(data => this.setState({ todos: data }));
  };

  //delete the todo with the passed in id
  deleteTodo = async id => {
    await fetch("http://localhost:8080/api/deletetodo", {
      body: id,
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    this.update();
  };
  //when user checks the checkbox, mark the task as done
  changeComplete = async id => {
    await fetch("http://localhost:8080/api/changecompleted", {
      body: id,
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    this.update();
  };
  //add a todo with the passed in text
  addTodo = async text => {
    await fetch("http://localhost:8080/api/addtodo", {
      body: text,
      method: "POST"
    }).catch(error => console.log(error));
    this.update();
  };

  render() {
    //Go through the state array and for each todo create a todoComp
    return (
      <div>
        <h1 style={{ color: "#ffdc34" }}>Todo list app</h1>
        <Addtodo addTodo={this.addTodo} />

        {this.state.todos.map(todo => (
          <Todocomp
            key={todo.id}
            todoObject={todo}
            changeComplete={this.changeComplete}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}
