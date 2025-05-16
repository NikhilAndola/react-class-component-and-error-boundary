import React, { Component } from 'react';
// import ErrorBoundary from './ErrorBoundary';


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
      items: ["nick", "mick", "rinky"]
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

        {/* <button onClick={()=> {}}>Set Error</button> */}
        <ErrorBoundary fallback={<h3>Error has occured</h3>}>
          <div>List of items</div>
          <>
            {
              this.state.items.map(item => {
                <li key={item}>
                  <ul>{item}</ul>
                </li>
              })
            }
          </>
        </ErrorBoundary>
      </div>
    );
  }
}

export default CountReactClassBased;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}