import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'abc', name: 'James', age: '28'},
      { id: 'jkl', name: 'Sylvia', age: '25'},
      { id: 'xyz', name: 'Obi', age: '3'}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }

  // componentWillMount() {
  //   console.log('[Persons.js] componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  changedNameHandler = (event, id) => {
    const index = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const persons = [...this.state.persons];
    const person = {...this.state.persons[index]}

    person.name = event.target.value;
    persons[index] = person;
    this.setState({persons: persons})
  }


  render() {
    console.log('[App.js] render')
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons  persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changedNameHandler}
          />
      );
    }
    
    return (
      <div className="App">
      <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit  showPersons={this.state.showPersons}
                  appTitle={this.props.title}
                  persons={this.state.persons}
                  toggle={this.togglePersonsHandler} />
                  : null}

          {persons}
      </div>
    );
  }
}

export default App;
