import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
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
          <button onClick={this.props.removeTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background:'#ff0000',
  color: '#fff',
  border: 'none',
  float: 'right',
  cursor: 'pointer',
  borderRadius: '50%',
  padding: '3px 8px'
}

export default TodoItems;
