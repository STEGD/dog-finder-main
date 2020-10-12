import React, { Component } from 'react';
const linkCheck = require('link-check');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: ""
    }
  }

  buttonPress = endpointNum => { fetch(`/${endpointNum}`).then(res => res.json()).then(data => this.setState({ message: data.message })); }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A URL was submitted: ' + this.state.value);
    linkCheck(this.state.value, function (err, result) {
        if (err) {
            alert(err);
            return;
        }
        alert(`${result.link} is ${result.status}`);
    });
    event.preventDefault();
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
          <button class="button1" onClick={() => this.buttonPress("test1")}>Test endpoint 1</button>
          <button class="button1" onClick={() => this.buttonPress("test2")}>Test endpoint 2</button>
	        <button class="button1" onClick={() => this.buttonPress("test3")}>Test endpoint 3</button>
          <button class="button1" onClick={() => this.buttonPress("test4")}>Test endpoint 4</button>
          <button class="button1" onClick={() => this.buttonPress("test5")}>Test endpoint 5</button>
          <p>{this.state.message}</p>
	  <form onSubmit={this.handleSubmit}>
  	  <label>
  	    Url to scrape:
  	    <input type="text" value={this.state.value} onChange={this.handleChange} />
 	  </label>
 	  <input type="submit" value="Submit" />
	  </form>
        </header>
      </div>
    );
  }
}

export default App;
