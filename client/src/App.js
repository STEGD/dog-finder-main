import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  buttonPress = endpointNum => {
    fetch(`/test${endpointNum}`)
    .then(res => res.json())
    .then(data => this.setState({
      message: data.message
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello world</h1>
          <button onClick={() => this.buttonPress(1)}>Test endpoint 1</button>
          <button onClick={() => this.buttonPress(2)}>Test endpoint 2</button>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;
