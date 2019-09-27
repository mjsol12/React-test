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

  render () {
    return (
      <React.Fragment>
        <p style={this.getStyle()}>
          <input type='checkbox' onChange={this.props.markComplete}/> {''} {this.props.todo.title}
          </p>
      </React.Fragment>
    )
  }
}

export default TodoItems;
