import React, { Component, PropTypes } from "react";
import Todo from "./Todo";

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <input type="text"/>
        <button> Add Todo</button>
        <ul>
          { todos.map( todo  => <Todo key={todo.id} {...todo} />) }
        </ul>
      </div>
    );
  }

}

export default TodoList;
