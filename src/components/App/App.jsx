import React from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import './App.css'
import AddItem from "../AddItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.startNum = 100

    this.state = {
      todos: [
        this.createTodoItem('Learn React'),
        this.createTodoItem('I\'m React'),
        this.createTodoItem('I\'m profi'),
        this.createTodoItem('Redux')
      ]
    }
  }

  createTodoItem(text) {
    return {id: this.startNum++, label: text, important: false, done: false}
  }

  deleteItem = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((elem) => elem.id === id)

      return {
        todos: [...todos.filter(el => el.id !== id)]
      }
    })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState(({todos}) => {
      const newItem = this.createTodoItem('Flux')

      return {
        todos: [
          ...todos,
          newItem
        ]
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const itemIdx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[itemIdx]
    const newItem = {...oldItem, [propName]: !arr[itemIdx][propName]}

    return {
      todos: [...arr.slice(0, itemIdx), newItem, ...arr.slice(itemIdx + 1)]
    }
  }

  onToggleDone = (id) => {
    this.setState(({todos}) => {
      return this.toggleProperty(todos, id, 'done')
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todos}) => {
      return this.toggleProperty(todos, id, 'important')
    })
  }

  render() {
    const {todos} = this.state

    const todoCount = todos.filter((item) => item.done === false).length
    const done = todos.length - todoCount

    return (
      <div className='app'>
        <AppHeader todo={todoCount} done={done}/>
        <div className='app-filter'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <AddItem addItem={this.addItem}/>
        <ToDoList todos={todos}
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
      </div>
    );
  }
}

export default App;