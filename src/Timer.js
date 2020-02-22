/**
 * React component for the timers
 */
import React from 'react';

class Argument{
    constructor(team,timeInSeconds,arg){
        this.team = team;
        this.time = timeInSeconds;
        this.arg = arg;
    }
    decrement(){
        this.time = this.time-1;
    }
    getMinute(){
        return(parseInt(this.time/60));
    }
    getSeconds(){
        return(this.time%60);
    }
    get(){
        var m = this.getMinute();
        var s = this.getSeconds();
        return(
            <div className = {this.team} Timer>
                <h2>{this.arg}</h2>
                <h1 className = "superHeader">{m}:{s<10?0:null}{s}</h1>
            </div>
        )
    }
}
function makeBuffer()
{
    return(new Argument("buffer",6,"Buffer"));
}
var structure = [];

//all of the categories for the debate
structure.push(new Argument("buffer",120,"Preparation"));
structure.push(new Argument("pro",240,"Affirmative Construction"));
structure.push(makeBuffer());
structure.push(new Argument("con",180,"Negative Cross-Examination"));
structure.push(makeBuffer());
structure.push(new Argument("con",240,"Negative Construction"));
structure.push(makeBuffer());
structure.push(new Argument("pro",180,"Affirmative Cross-Examination"));
structure.push(makeBuffer());
structure.push(new Argument("pro",240,"Affirmative Rebuttal"));
structure.push(makeBuffer());
structure.push(new Argument("con",240,"Negative Rebuttal"));
structure.push(makeBuffer());
structure.push(new Argument("con",180,"Negative Closing Statement"));
structure.push(makeBuffer());
structure.push(new Argument("pro",240,"Affirmative Closing Statement"));


class Timer extends React.Component{
    yieldTime(){ //removes current timer if there is a yield
        structure.splice(0,1);
    }
    nextStage(self){ //if time runs out, go to the next category
        var time = structure[0];
            time.decrement();
            if(time.time==0)
            {
                structure.splice(0,1);
            }
            if(structure.length>0)
            {
                self.setState({time:structure[0].get()});
            }
    }
    tick(self) //updates the timer every second
    {
        if(structure.length>0)
        {
            this.nextStage(self);
        }
        else{
            self.props.parent.finish();
        }
    }
    constructor(props)
    {
        super(props);
        this.state = {time:structure[0].get()}
        setInterval(()=>this.tick(this),1000);
    }
    render()
    {
        return(
            <div id = "timer">
                {this.state.time}
                <br/>
                <button onClick = {()=>{this.yieldTime()}}>Yield Time</button>
            </div>
        )
    }
}

export default Timer