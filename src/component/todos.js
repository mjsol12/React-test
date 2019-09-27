import React, {Component} from 'react';
import TodoItems from './todoItems'

class Todos extends Component {

  render () {
    return this.props.todos.map((todo) => (
      <div>
        <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete()}/>
      </div>
    ));
  }
}

export default Todos;
