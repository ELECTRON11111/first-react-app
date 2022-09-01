import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// One way to create a component
class App extends Component {
  state = {
    persons : [
      {
        name: "dan", 
        age : 19
      },
      {
        name: "idana",
        age: 22
      }
    ],
    otherState: "some stuff",
    showPersons: false
  };

  switchNameHandler = (newName) => {
    console.log('worked!');
    // Set state re-renders the DOM when there's an update to the state
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: "wurasimi", age: 21}
      ]
    });
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: e.target.value, age: 20},
        {name: "wurasimi", age: 21}
      ]
    });
  }

  togglePersonsHandler = () => {
    // This decides to display the persons or not
    const doesShow = this.state.showPersons? false : true; 
    this.setState({
      showPersons: doesShow
    })
  }

  render(){
    // Inline styling of elements
    // Restriction is that you can't work on hover and some other pure CSS features
    const style = {
      backgroundColor: 'white',
      font: "inherit",
      border: "1px solid aquamarine",
      padding: "8px",
      borderRadius: "10px",
      cursor: "pointer"
    }
    // remember : Everything in React is JavaScript
    // So when the Render method is called what ever javascript we write here will run
    //  So we use that for writing cleaner dynamic and conditional content

    // set a default value
    let persons = null;
  
    if (this.state.showPersons) {
      persons =  (
        <div>
          <Person
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}
            changed = {this.nameChangedHandler}
          />

          <Person
            click = {() => this.switchNameHandler("simi")} 
            name={this.state.persons[1].name} 
            age = {this.state.persons[1].age}
          />
        </div>
      )    
    }

    return (
      // Also every tag you want to use would be nested in one div per component
      <div className="App">
        <h1>I am a react app, haha</h1>
        <p>this is really working.</p>
        
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    )
  }
};

export default App;