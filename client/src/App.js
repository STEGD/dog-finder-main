import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: "",
      value: '',
      db_id: 0,
      db_name: '',
      db_value: 0,
      baseURL: 'https://us-central1-dog-finder-fae9d.cloudfunctions.net/app'
    }
  }

  buttonPress = endpointNum => { 
    fetch(`/${endpointNum}`)
      .then(res => res.json())
      .then(data => this.setState({ 
        message: data.message 
      })
    ); 
  }

  db_buttonPress = () => { 
    fetch(`${this.state.baseURL}/api/test`)
      .then(res => res.json())
      .then(data => this.setState({ message: data.message })
    ); 
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { db_id, db_name, db_value } = this.state;
    const param = {
      "id": db_id,
      "item": db_name,
      "value": db_value
    }
    fetch(`${this.state.baseURL}/api/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        'data': param
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ 
        message: "Data saved! Go check out the DB for results"
      })
    }
    ); 
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello world</h1>
          <button className="button1" onClick={() => this.buttonPress("test1")}>Test endpoint 1</button>
          <button className="button1" onClick={() => this.buttonPress("test2")}>Test endpoint 2</button>
          <button className="button1" onClick={() => this.buttonPress("test3")}>Test endpoint 3</button>
          <button className="button1" onClick={() => this.buttonPress("test4")}>Test endpoint 4</button>
          <button className="button1" onClick={() => this.buttonPress("test5")}>Test endpoint 5</button>
          <form onSubmit={this.handleSubmit}>
            <label>
              Url to scrape:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          </form>
          {/* DB TESTING FUNCTIONS */}
          <form onSubmit={this.handleSubmit}>
            <label>
              Submit data to the DB: 
              <input type="text" placeholder="ID" name="db_id" onChange={this.handleChange} />
              <input type="text" placeholder="Name" name="db_name" onChange={this.handleChange} />
              <input type="text" placeholder="Value" name="db_value" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button className="button1" onClick={() => this.db_buttonPress()}>Test DB connection</button>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;
