import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ChampionCard extends Component {
  render() {
    return (
      <div className="championInfo">
        <h1>Champion Name</h1>
        <p>Champion Role</p>
        <p>Lore Abstract</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
      </div>
    );
  }
}

export default App;
