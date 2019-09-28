import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './component/pages/todoList/todos'
import Header from './component/layout/header'
import AddTodo from './component/pages/todoList/addTodo'
import uuid from 'uuid'
import About from './component/pages/about'
import TrashList from './component/pages/trash/trashList'


class App extends Component {

  state  = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out garbage',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ],
    trashes: [
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // remove todo
  removeTodo = (id) => {
    const todoToFiltered = this.state.todos.find((todo) => todo.id === id);
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoToFiltered.id),
      trashes: [...this.state.trashes, todoToFiltered]
    });
  }
  // add todo
  addTodo = (todoTitle) => {
    if (!todoTitle) {
      return;
    }
    const newTodo = {
      title: todoTitle,
      completed: false,
      id: uuid.v4()
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // clean trash
  cleanTrash =() => {
    this.setState({
      trashes: []
    })
  }

  // return from trash
  returnTodo = (returnedTodo) => {
    this.setState({
      todos: [...this.state.todos, returnedTodo],
      trashes: this.state.trashes.filter(trash => trash.id !== returnedTodo.id)
    })
    console.log(returnedTodo)
  }

  render () {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos}
                       markComplete={this.markComplete}
                       removeTodo={this.removeTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
            <Route path='/trash' render={props => (
              <React.Fragment>
                <div style={{display: 'flex', margin: '5px'}}>
                  <button className='button-one' onClick={this.cleanTrash}>Clean</button>
                </div>
                <TrashList trashes={this.state.trashes} returnTodo={this.returnTodo}/>
              </React.Fragment>
            )}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
