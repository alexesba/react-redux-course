export const ADD_TODO = "ADD_TODO";

export const addTodo = description => {
  return {
    type: ADD_TODO,
    description
  }
}
