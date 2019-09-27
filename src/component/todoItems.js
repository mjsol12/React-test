import React, {Component} from 'react';

class TodoItems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }
  markComplete = (e) => {
    this.props.todo.completed = true;
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <p style={this.getStyle()}>
          <input type='checkbox' onChange={this.markComplete}/> {''} {this.props.todo.title}
          </p>
      </div>
    )
  }
}

export default TodoItems;
