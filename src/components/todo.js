import React from "react";
import { connect } from "react-redux";
import {deleteTodo } from "../action/action";



export const todo = ({todo, idx,deleteTodo}) => {
    return (
        <li  onClick={(e) =>e.target.classList.toggle('checked')}>{todo}<span className="close" onClick={() => deleteTodo(idx)}>X</span></li>
    );
}
const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key))});
    
export default connect(null,mapDispatchToProps)(todo);