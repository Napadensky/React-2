import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);    
    console.log("Enviando datos");
    
  }
  render() {
    return (
      <div className="card container">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsable"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Descripcion"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={this.handleInput}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="higth">higth</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="description"
              className="form-control btn btn-primary"
              placeholder="Descripcion"
            />
          </div>
        </form>
      </div>
    );
  }
}
