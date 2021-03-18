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
      ],
      filterValue: '',
      statusFilter: 'all'
    }
  }

  createTodoItem(text) {
    return {id: this.startNum++, label: text, important: false, done: false}
  }

  deleteItem = (id) => {
    this.setState(({todos}) => {
      return {
        todos: [...todos.filter(el => el.id !== id)]
      }
    })
  }

  addItem = (text) => {
    this.setState(({todos}) => {
      const newItem = this.createTodoItem(text)

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

  onChangeFilter = (e) => {
    this.setState({ filterValue: e.target.value })
  }

  onSearchChange = (text) => {
    this.setState({ filterValue: text})
  }

  search(items, filterValue) {
    if (!filterValue) return items

    return items.filter(item => {
      return item.label
        .toLowerCase().trim()
        .indexOf(this.state.filterValue.toLowerCase().trim()) >= 0
    })
  }

  filter(items, statusFilter) {
    switch (statusFilter) {
      case 'active':
        return items.filter( item => !item.done )
      case 'done':
        return items.filter( item => item.done )
      default:
        return items
    }
  }

  onChangeStatusFilter = (statusFilter) => {
    this.setState({ statusFilter: statusFilter })
  }

  render() {
    const {todos, filterValue} = this.state

    const filterList = this.search(this.filter(todos, this.state.statusFilter), filterValue)
    const todoCount = todos.filter((item) => item.done === false).length
    const done = todos.length - todoCount

    return (
      <div className='app'>
        <AppHeader todo={todoCount} done={done}/>
        <div className='app-filter'>
          <SearchPanel onSearchChange={this.onSearchChange} value={this.state.filterValue}/>
          <ItemStatusFilter onChangeStatusFilter={this.onChangeStatusFilter} />
        </div>
        <AddItem addItem={this.addItem}/>
        <ToDoList todos={filterList}
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
      </div>
    );
  }
}

export default App;