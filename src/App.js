import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import UpdateTodo from './components/UpdateTodo';

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
  const handleNewUpdate = (index, newFirstName) => {
    console.log(index, newFirstName)
    const listItem = [...state["listItem"]];
    listItem[index] = newFirstName
    setState({
      listItem
    })

  }
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <h1>
              Create
          </h1>
            <Todo callback={handleTodo} />

          </td>

          <td>
            <h1>
              Update
          </h1>
            <UpdateTodo updateData={updateState} callback={handleNewUpdate} />

          </td>
          <td>
            <h1>
              Read / Delete
          </h1>
            <TodoList data={state["listItem"]} callback={handleRemove} callbackUpdate={handleUpdate} />

          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
