import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }

  render () {
    const {id, title} = this.props.todo;
    return (
      <div>
        <p style={this.getStyle()}>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {''}
          {title}
          <button className='removeBtn' onClick={this.props.removeTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItems;
