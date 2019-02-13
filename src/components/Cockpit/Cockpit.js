import React, { useEffect, useRef } from 'react';
import './Cockpit.css';


const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     //alert('Saved data to cloud!');
        //     console.log('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
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
    if(props.personsLength <= 2) {
      classes.push('red');
    }

    if(props.personsLength <= 1) {
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} style={style} onClick={props.toggle}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);