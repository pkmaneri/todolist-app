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
        <table className="table">
          <tbody>
            <Switch>
              <tr>
                <td>
                  <h1>
                    Create
                  </h1>
                  <Route path="/todo">
                    <Todo callback={handleTodo} />
                  </Route>

                </td>
                <td>
                  <h1>
                    Update
               </h1>
                  <Route path="/updateTodo">
                    <UpdateTodo updateData={updateState} callback={handleNewUpdate} />
                  </Route>

                </td>
                <td>
                  <h1>
                    Read / Delete
               </h1>
                  <Route path="/todoList">
                    <TodoList data={state["listItem"]} callback={handleRemove} callbackUpdate={handleUpdate} />
                  </Route>
                </td>
              </tr>
            </Switch>
          </tbody>
        </table>

      </Router>

    </div>
  );
}

export default App;
