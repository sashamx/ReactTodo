import React, {Component} from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'
import AddTodoItem from './components/add-item'

export default class App extends Component {
  maxId = 100

  state = {
    todoDate: [
      {label: 'Drink coffe', important: false, done: false, id: 1},
      {label: 'Awesome App', important: false, done: false, id: 2},
      {label: 'Build App', important: true, done: false, id: 3},    
    ],
    term: '',
    filter: 'all'
  }

  onDeletedItem = (id) => {
    this.setState(({todoDate}) => {
      return {
        todoDate: todoDate.filter(el => el.id !== id)
      }
    })
  }

  onAddItem = (item) => {
    this.setState(({todoDate}) => {
      return {
        todoDate: [{...item, id: this.maxId++}, ...todoDate]
      }      
    })
  }

  onToogleDone = (id) => {    
    this.setState(({todoDate}) => {
      const idx = todoDate.findIndex(el => el.id === id)
      const newItem = {...todoDate[idx], done: !todoDate[idx].done}
      return {
        todoDate: [...todoDate.slice(0, idx), newItem, ...todoDate.slice(idx + 1)] 
      }      
    })
  }

  onToogleImpotant = (id) => {
    this.setState(({todoDate}) => {
      const idx = todoDate.findIndex(el => el.id === id)
      const newItem = {...todoDate[idx], important: !todoDate[idx].important}
      return {
        todoDate: [...todoDate.slice(0, idx), newItem, ...todoDate.slice(idx + 1)] 
      }      
    })
  }

  search(items, term) {
    if(term.length === 0) return items

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter){
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default: 
        return items
    }
  }

  onSerchChange = (val) => {
    this.setState({
      term: val
    })
  }

  onFilterChange = (val) => {
    this.setState({
      filter: val
    })
  }

  render(){
    const {todoDate, term, filter} = this.state
    const visibleItems = this.filter(this.search(todoDate, term), filter) 
    const doneCount = todoDate.filter(el => el.done).length
    const todoCount = todoDate.length - doneCount                  
    
    return (
      <div className="container-sm py-5">
        <AppHeader done={doneCount} todo={todoCount} />
        <SearchPanel onSerchChange={this.onSerchChange} filter={filter} onChangeFilter={this.onFilterChange} />
        <TodoList 
          todos={visibleItems}
          onDeleted={this.onDeletedItem}
          onToogleDone={this.onToogleDone}
          onToogleImpotant={this.onToogleImpotant}
        />
        <AddTodoItem onAddItem={this.onAddItem}/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))