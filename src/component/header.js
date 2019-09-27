import React, {Component} from 'react';

class Header extends Component {
  render () {
    return (
      <Header style={headerStyle}>
        <h1>Todo List</h1>
      </Header>
    )
  }
}

const headerStyle ={
  textAlign: 'center',
  background: 'lightgray',
  padding: '12px'
}

export default Header;
