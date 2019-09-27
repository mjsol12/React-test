import React, {Component} from 'react';
import './App.css';
import Todos from './component/todos'
import Header from './component/header'

class App extends Component {
  state  = {
    todos: [
      {
        id: 1,
        title: 'Take out garbage',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (e) => {
    
  }

  render () {
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} markComplete={this.markComplete}> </Todos>
      </div>
    );
  }
}

export default App;
