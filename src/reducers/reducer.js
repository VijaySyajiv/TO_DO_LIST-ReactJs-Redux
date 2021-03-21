const initState = {
    todos: [],
    text: "",
  
  };
  
  export const addTodo = (state = initState, action) => {
    switch (action.type) {
     
      case "ADD_TEXT":
        return { ...state, text: action.payload };
      case "ADD_TODO":
        console.log("read");
        const todos2 = state.todos.concat(action.payload);
        return { ...state, todos: todos2, text: "" };
      case "DELETE_TODO":
        console.log("redel");
        const todo3 = state.todos.filter((todo, i) => i !== action.payload);
        return { ...state,todos: todo3};
      default:
        return state;
    }
  };
  