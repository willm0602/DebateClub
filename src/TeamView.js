/**
 * Randomizes team and allows user to view teasm
 */
import React from 'react';
    
class TeamView extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        var prosList = []; //affirmative team
        var consList = []; //negative team
        var people = this.props.names; //all people
        while(people.length>0){ 
            if(people.length==1) //if only one person left, add to a random team
            {
                var choice = parseInt(2*Math.random());
                if(choice==0)
                {
                    prosList.push(people[0]);
                }
                else{
                    consList.push(people[0]);
                }
                people.splice(0,1);
            }
            else{ //add two people, one to affirmative team, one to negative
                var index = parseInt(Math.random()*people.length);
                var JSX = <p>{people[index]}</p>;
                prosList.push(JSX);
                people.splice(index,1);
                index = parseInt(Math.random()*people.length);
                var JSX = <p>{people[index]}</p>
                consList.push(JSX);
                people.splice(index,1);
            }
        }

        return(
            <div>
                <span id = "teams">
                    <div id = "pros">
                        <h1 className = "underlinedHeader">Pros</h1>
                        {prosList}
                    </div>
                    <div id = "cons">
                        <h1 className = "underlinedHeader">Cons</h1>
                        {consList}
                    </div>  
                </span>
                <button id = "startDebate" onClick = {()=>{this.props.parent.startDebate()}}>Start Debate</button>
            </div>
        )
    }
}

export default TeamView;