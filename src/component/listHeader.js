import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class ListHeader extends Component {

  render () {
    return (
      <header style={headerStyle}>
        <h1>Todo List</h1>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
      </header>
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
