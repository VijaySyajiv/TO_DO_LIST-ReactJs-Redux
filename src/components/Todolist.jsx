import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";


 
 export const Todolist = ({ todos }) => {
   console.log(todos)
   return (
     <ul> 
        {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
       
     </ul>
   );
 }
 const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(Todolist);

