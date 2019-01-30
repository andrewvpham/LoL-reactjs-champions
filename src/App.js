import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ExpandedChampionCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="champOverlay">
        <h1>{this.props.selectedchamp.championName}</h1>
        <p>{this.props.selectedchamp.championRole}</p>
        <iframe width="560" height="315" src={this.props.selectedchamp.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
}

class ChampionCard extends Component {
  constructor(props) {
    super(props);
    this.open = this.props.clickEvent;
  }
  render() {
    return (
      <div className="championInfo" onClick={this.open}>
        <h1>{this.props.championName}</h1>
        <p>{this.props.championRole}</p>
        <p>Lore Abstract</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this.state = {
      active: false,
      champions: [
        {championName: "Garen", championRole: "Top Lane", url: "https://www.youtube.com/embed/Q7oyW6LjxrA"},
        {championName: "Lux", championRole: "Mid Lane", url: "https://www.youtube.com/embed/pJB6JWDESWU"},
        {championName: "Ashe", championRole: "ADC/Bot Lane", url: "https://www.youtube.com/embed/mSbMQ5xDnEg"},
        {championName: "Warwick", championRole: "Jungler", url: "https://www.youtube.com/embed/Rro20bR4jnQ"},
        {championName: "Janna", championRole: "Support/Bot Lane", url: "https://www.youtube.com/embed/tlHpXy_VNpE"},
     ],
     selectedchamp: 0
    }
  }
  open(index, e) {
    this.state.active = true;
    this.state.selectedchamp = index;
    this.setState(state=>({
      active:this.state.active,
      selectedchamp: this.state.selectedchamp
    }))
  }
  render() {
    return (
      <div className="App">
        {this.state.champions.map((champion, index)=>(
          <ChampionCard championName={champion.championName} championRole={champion.championRole} url={champion.url} clickEvent={this.open.bind(this, index)}/>
        ))}
        {(this.state.active?<ExpandedChampionCard selectedchamp={this.state.champions[this.state.selectedchamp]}/>:null)}
      </div>
    );
  }
}

export default App;
