import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  change = (event) => this.setState({[event.target.name]: event.target.value});

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title:''});
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '5px'}}>
        <input type='text'
               name='title'
               placeholder='add todo'
               style={{flex: '10', padding: '5px'}}
               value={this.state.title}
               onChange={this.change}
        />
        <button type='submit'
                className='button-one'>Add
        </button>
      </form>
    )
  }
}

export default AddTodo;
