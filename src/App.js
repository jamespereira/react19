import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: '28'},
      { name: 'Sylvia', age: '25'},
      { name: 'Obi', age: '3'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '29'},
        { name: 'Sylvannas', age: '26'},
        { name: 'Oberon', age: '4'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: '29'},
        { name: event.target.value, age: '26'},
        { name: 'Oberon', age: '4'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, i'm a react App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('James!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jamper')}
          changed={this.nameChangedHandler} >
          My hobby is sleeping
        </Person>
        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
