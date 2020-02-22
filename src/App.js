/**
 * Main section of React app
 */

import React from 'react';
import './App.css';
import AddPeople from './Adder';
import TeamView from './TeamView';
import Timer from './Timer';


function Finish(){
  return(
    <div>
      <h1>Finished!</h1>
    </div>
  )
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {comp: <AddPeople parent = {this}/>};
  }
  viewTeams(names){ //allows user to view the teams
    this.setState({comp: <TeamView parent = {this} names = {names}/>})
  }
  startDebate(){ //allows user to start the debate
    this.setState({comp: <Timer parent = {this}/>});
  }
  finish(){ //what happens when the debate is done
    this.setState({comp: <Finish/>})
  }
  render(){
    return(
      <div className = "App">
        {this.state.comp}
      </div>
    )
  }
}

export default App;
