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
         <script>  var link = document.createElement('link');
         link.rel = 'stylesheet';  
        link.type = 'text/css'; 
           link.href = 'dog-finder-main/client/src/index.css'; 
         </script>

          <h1 className="App-title">Hello world</h1>
          <button class="button1" onClick={() => this.buttonPress(1)}>Test endpoint 1</button>
          <button class="button1" onClick={() => this.buttonPress(2)}>Test endpoint 2</button>
	        <button class="button1" onClick={() => this.buttonPress(3)}>Test endpoint 3</button>
          <button class="button1" onClick={() => this.buttonPress(4)}>Test endpoint 4</button>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;
