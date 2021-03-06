import React from 'react';
import axios from "axios";
import './App.css';
import Navbar from "./components/Navbar.js";
import PlayerList from "./components/PlayerList.js";
import "@testing-library/jest-dom";


class App extends React.Component {
  state = {
    name: "",
    id: "",
    country: "",
    list: []
  };

  componentDidMount(){
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res);
      this.setState({
        list: res.data,
        name: res.data.name,
        id: res.data.id,
        country: res.data.country,
        searches: res.data.searches
      });
    })
    .catch(err => console.log(err));
  }

  handleChanges = e =>{
    this.setState({
      name: e.target.value
    });
  };

  render(){
    return(
      <div>
        <Navbar />

        <PlayerList
        data-testid="playerList"
        name={this.state.name}
        id={this.state.id}
        country={this.state.country}
        list={this.state.list}
        searches={this.state.searches}
        />
      </div>
    );
  }
}
export default App;
