import { createStore } from "redux";
import { addTodo } from "../reducers/reducer";


export const store = createStore(addTodo);
