import React, { Component } from 'react';
import './App.css';
import { quotes } from './programmersquote.json';
import ProgrammersQuote from './components/ProgrammersQuote.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Click the button to generate a quote!"
    }
  }

  generateQuote() {
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    this.setState({quote: quote});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>^programmers quote</h1>
          <button onClick={() => this.generateQuote()}>alt + ctrl + del</button>
        </header>
        <p className="App-intro">
          <ProgrammersQuote quote={this.state.quote} />
        </p>
      </div>
    );
  }
}



export default App;
