import React, {Component} from 'react';

class ListHeader extends Component {

  render () {
    return (
      <div style={headerStyle}>
        <h1>Todo List</h1>
      </div>
    )
  }
}

const headerStyle ={
  textAlign: 'center',
  background: 'lightgray',
  color: '#fff',
  padding: '12px'
}

export default ListHeader;
