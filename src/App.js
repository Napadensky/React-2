import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { todos } from "./todos.json";
import TodoFrom from "./components/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }
  removeTodo(index) {
    if (window.confirm("Usted esta seguro de eliminar el ")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        }),
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                className=" btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        {/* Formulario */}
        <div className="row mt-4 mb-4">
          <TodoFrom onAddTodo={this.handleAddTodo} />
        </div>
        {/* la navegacion */}
        <nav className="container navbar navbar-dark bg-dark">
          <a href="http://localhost:3000" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        {/* Las tareas */}
        <div className="container">
          <div className="row mt-4">{todos}</div>
        </div>
        {/* El logo */}
        <img src={logo} className="App-logo" alt="logo " />
      </div>
    );
  }
}

export default App;
