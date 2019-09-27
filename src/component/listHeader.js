import React, {Component} from 'react';

class Header extends Component {
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
  padding: '12px'
}

export default Header;
