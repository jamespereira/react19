import React, { useEffect } from 'react';
import './Cockpit.css';


const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    })

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
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;