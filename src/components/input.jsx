import React from "react";
import { connect } from "react-redux";
import { addTodo, addText,deleteTodo,checked } from "../action/action";

const InputField = ({ addText, text, selected, addTodo }) => {
  console.log (addTodo);
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if ( text)
    {
      console.log(text);
      addTodo(text);
    }
    else 
    alert("You must write something!");
  };
  return (
    <div className="box">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="Enter your todo..."
        onChange={handleChange}
      />
    </form></div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  
  addText: value => dispatch(addText(value)),
  
});
const mapStateToProps = ({ text }) => ({
  text,
  
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
