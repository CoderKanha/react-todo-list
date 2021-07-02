import './App.css';
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./component/About";

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
  }

  return (
    <Router>
      <div className="App">
        <Header title='My TODO List' showSearchBar={true}/>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Todos todos={todoList} onDelete={onDelete} addTodo={addTodo}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" render={() => {
            return (
              <>
                <About/>
              </>
            )
          }}>
          </Route>

        </Switch>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
