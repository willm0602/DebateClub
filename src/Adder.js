/**
 * React Component to add people to the debate
 */
import React from 'react';

var names = []; //list of people

class Adder extends React.Component //the component
{
    remove(name) //removes person from the list
    {
        for(var i = 0; i<names.length; i++)
        {
            var checking = names[i]["key"];
            if(checking == name){
                names.splice(i,1);
                i = names.length;
                this.setState({people: names});
                this.forceUpdate();
            }
        }
    }
    add() //adds person to the list
    {
        var name = document.getElementById("nameInput").value;
        if(name.length>0)
        {
            names.push(<div key = {name}>{name}<button className = "delete" onClick = {()=>{this.remove(name)}}>X</button><br/></div>);
            this.setState({people: names});
            this.forceUpdate();
            document.getElementById("nameInput").value = "";
        }
    }
    constructor(props)
    {
        super(props);
        this.state = {people: names};
    }
    render()
    {
        return(
            <span>
                <h2>JD Replacement</h2>
                <input type = "text" id = "nameInput"/><br/>
                <button onClick = {()=> {
                    this.add();
                }}>Add</button><br/><br/>
                {this.state.people.map(function(peep){
                    return(peep);
                })}
                <br/>
                <button onClick = {()=>{
                    var peeps = []
                    for(var i = 0; i<names.length; i++)
                    {
                        peeps.push(names[i]['key']);
                    }
                    this.props.parent.viewTeams(peeps);
                }}>View Teams</button>
            </span>
        );
    }
}

export default Adder;