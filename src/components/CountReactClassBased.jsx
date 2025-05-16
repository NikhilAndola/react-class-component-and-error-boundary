import React, { Component } from 'react';

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class CountReactClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sally',
      age: 13,
      count: 0,
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
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        <h4>{this.state.count}</h4>
        <button onClick={this.handleCount}>Click to Update</button>
      </div>
    );
  }
}

export default CountReactClassBased;
