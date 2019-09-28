import React,{ Component} from 'react';

class TrashList extends Component {
  render() {
    return this.props.trashes.map((list) => {
      return (
        <div key={list.id}>
          <p>{list.title} <button className='returnBtn' onClick={this.props.returnTodo.bind(this, list)}>return</button>
          </p>
        </div>
      )
    })
  }
  ;
}

export default TrashList;