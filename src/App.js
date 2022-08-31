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
    ]
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

    return (
      // Also every tag you want to use would be nested in one div per component
      <div className="App">
        <h1>I am a react app, haha</h1>
        <p>this is really working.</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "opem")}>Switch state</button>
        <Person name = "suo" age = "11"> Human </Person>
        {/* benefits of using components like Person is reusability */}
        <Person
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          changed = {this.nameChangedHandler}
        />

        {/* 

          you know we don't call functions directly because it runs even without the event being triggered.

          so if we pass an anonymous function created, it won't run directly so we can the function with the argument inside the anonymous function.

          bind is a better option in terms of performance.

        */}
        <Person
          click = {() => this.switchNameHandler("simi")} 
          name={this.state.persons[1].name} 
          age = {this.state.persons[1].age}
        />
      </div>
    )
  }
};

export default App;