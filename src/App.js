import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './component/todos'
import ListHeader from './component/listHeader'
import AddTodo from './component/addTodo'
import uuid from 'uuid'
import About from './component/pages/about'


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
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }
  // add todo
  addTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      completed: false,
      id: uuid.v4()
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <ListHeader />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos}
                       markComplete={this.markComplete}
                       removeTodo={this.removeTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
