import React, { Component, PropTypes } from "react";

class Todo extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }

  render() {
    const { description, id } = this.props;

    return (
      <li className={`item item-${id}`}> { description } </li>
    );
  }
}

export default Todo;
