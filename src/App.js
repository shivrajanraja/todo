import React, { Component } from 'react';
import Todoapp from './Todoapp';
import Addobj from './Addobj';


class App extends Component {
  state = {
    list: [

    ]
  }
  delfun = (id) => {
    let list = this.state.list.filter(items => {
      return items.id !== id;
    })
    this.setState({
      list
    })
  }
  addfun = (sample) => {
    sample.id = Math.random();
    let list = [...this.state.list, sample];
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>TODO</h1>
        <Todoapp todo={this.state.list} delfun={this.delfun} />
        <Addobj addfun={this.addfun} />
      </div>
    );
  }
}
export default App;
