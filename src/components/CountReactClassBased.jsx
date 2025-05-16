import React, { Component } from 'react';

class CountReactClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sally',
      age: 13,
      count: 0,
      list: ["nick", "mick", "rinky"]
    };
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidMount() {
    console.log('props', this.props);
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('Updated count', { prevProp, prevState, snapshot });
  }

  handleCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count === 3) {
      throw new Error('Crashed!!!!');
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        <h4>{this.state.count}</h4>

        <button onClick={this.handleCount}>Click to Update</button>

        <button onClick={()=> {}}>Set Error</button>
          <div>List of items</div>

        {
          this.state.list.map(item => {
            return <ul key={item}>
              <li>{item}</li>
            </ul>
          })
        }
      </div>
    );
  }
}

export default CountReactClassBased;
