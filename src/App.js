import './App.css';
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import {useEffect, useState} from "react";

function App() {

  let [todoList, setTodo] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

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
    setTodo(todoList.filter(todo => todo.id !== id))
    // localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  const addTodo = (title, desc) => {
    let id
    if (todoList && todoList.length > 0) {
      id = todoList[todoList.length - 1].id + 1
    } else {
      id = 0
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc
    }
    setTodo([...todoList, newTodo])
    // localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return (
    <div className="App">
      <Header title='My TODO List' showSearchBar={true}/>
      {/*<button onClick={addTodo}/>*/}
      <Todos todos={todoList} onDelete={onDelete} addTodo={addTodo}/>
      <Footer/>
    </div>
  );
}

export default App;
