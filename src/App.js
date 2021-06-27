import './App.css';
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import {useState} from "react";

function App() {

  let [todoList, stateTodoList] = useState([
    {
      id: 11,
      title: 'TODO 1',
      desc: 'This is a todo item 1'
    },
    {
      id: 21,
      title: 'TODO 2',
      desc: 'This is a todo item 2'
    },
    {
      id: 31,
      title: 'TODO 3',
      desc: 'This is a todo item 3'
    }
  ])

  const onDelete = (id) => {
    /**
     * Deleting array item with the below method will not work in React
     * As React updates the value using the state hook method
     */
    // const todoIndex = todoList.findIndex(todo => todo.id === id)
    // if (todoIndex > -1) {
    //   console.log(todoIndex)
    //   todoList.splice(todoIndex, 1)
    // }
    stateTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Header title='My TODO List' showSearchBar={true}/>
      <Todos todos={todoList} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
