
import './App.css';
import Input from "./components/input";
import TodosList from "./components/Todolist";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
    <h1 > Todos App</h1>
    <Input />
    <TodosList />
    
  </div>
  );
}
export default connect(
  null)(App);
