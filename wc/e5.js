//App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">{25 + 20}</h1>
      </div>
    );
  }
}

export default App;


//React Forms Program :
//App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;



//React Component Program
//App.js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { "name": "Abhishek" },
        { "name": "Saharsh" },
        { "name": "Ajay" }
      ]
    };
  }

  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map((item, index) => (
            <List key={index} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

class StudentName extends Component {
  render() {
    return (
      <div>
        <h1>Student Name Detail</h1>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}

export default App;


//React Props Program:
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <p>
          <strong>ReactJS Pros Example.</strong>
        </p>
      </div>
    );
  }
}

export default App;


//React Event Handling :
//APP.JS
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Welcome' };
  }

  clickHandler = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default App;


//React Router Program:
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Welcome' };
  }

  clickHandler = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default App;

//APP.JS
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./cmp/Home";
import About from "./cmp/About";
import Contact from "./cmp/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;