import _ from "lodash";
import {
  ADD_TODO
} from "./TodoActions";
const DEFAULT_STATE = {
  todos: [
    {id: 0, completed: true, description: "Learn React"},
    {id: 1, completed: false, description: "Learn React"}
  ]
}
export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      const id = _(state.todos).map( todo => todo.id).max().value() + 1;
      const todo = { id, description: action.description, completed: false };
      return { ...state, todos: [...state.todos, todo ] };
    default:
      return state;
  }
}
