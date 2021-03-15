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

    this.state = {
      todos: [
        {id: 1, label: 'Learn React', important: false},
        {id: 2, label: 'I\'m React', important: true},
        {id: 3, label: 'I\'m profi', important: false},
        {id: 4, label: 'Redux', important: false},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((elem) => elem.id === id)

      // return {
      //   todos: [...todos.filter(el => el.id !== id)]
      // }

      return {
        todos: [...todos.slice(0, idx), ...todos.slice(idx + 1)]
      }
    })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState(({ todos }) => {
      const nextElemId = todos[todos.length - 1].id + 1
      const newItem = {id: nextElemId, label: 'New Elem', important: false}

      return {
        todos: [
          ...todos,
          newItem
        ]
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <AppHeader/>
        <div className='app-filter'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <AddItem addItem={this.addItem}/>
        <ToDoList todos={this.state.todos} onDeleted={this.deleteItem}/>
      </div>
    );
  }
}

export default App;