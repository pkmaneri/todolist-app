import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import UpdateTodo from './components/UpdateTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  const [state, setState] = useState({
    listItem: []
  })
  const [updateState, setUpdateState] = useState({
    "updateObj": {
    }

  })
  const handleTodo = (userData) => {
    const listItem = [...state["listItem"]];
    listItem.push(userData)
    setState({
      listItem
    })

  }
  const handleRemove = (i) => {
    console.log(i)
    const listItem = [...state["listItem"]];
    listItem.splice(i, 1)
    setState({
      listItem
    })
  }
  const handleUpdate = (ele, i) => {
    // console.log(ele, i)
    setUpdateState({
      "updateObj": {
        "ele": ele,
        "i": i
      }
    })
  }
  const handleNewUpdate = (index, newValue) => {
    console.log(index, newValue)
    const listItem = [...state["listItem"]];
    listItem[index] = newValue
    setState({
      listItem
    })

  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exactpath="/todo">
            <Todo callback={handleTodo} />
          </Route>
          <Route exact path="/updateTodo">
            <UpdateTodo updateData={updateState} callback={handleNewUpdate} />
          </Route>
          <Route exact path="/todoList">
            <TodoList data={state["listItem"]} callback={handleRemove} callbackUpdate={handleUpdate} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
