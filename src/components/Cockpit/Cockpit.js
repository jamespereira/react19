import React from 'react';
import './Cockpit.css';


const cockpit = (props) => {

    const classes = [];
    let style = [];
    if(props.showPersons) {        
      style = {
        backgroundColor: 'coral',
        color: 'white'
      };
    }
    if(props.persons.length <= 2) {
      classes.push('red');
    }

    if(props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hi, i'm a react App</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;