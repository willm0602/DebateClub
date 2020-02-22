import React from 'react';
import './App.css';
import AddPeople from './Adder';
import TeamView from './TeamView';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}
function Finish(){
  return(
    <div>
      <h1>Finished!</h1>
    </div>
  )
}
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {comp: <AddPeople parent = {this}/>};
  }
  viewTeams(names){
    this.setState({comp: <TeamView parent = {this} names = {names}/>})
  }
  startDebate(){
    this.setState({comp: <Timer parent = {this}/>});
  }
  finish(){
    this.setState({comp: <Finish/>})
  }
  render(){
    return(
      <div>
        {this.state.comp}
      </div>
    )
  }
}

export default App;
