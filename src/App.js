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

  switchNameHandler = () => {
    console.log('worked!');
    // Set state re-renders the DOM when there's an update to the state
    this.setState({
      persons: [
        {name: "sup gee", age: 20},
        {name: "wurasimi", age: 21}
      ]
    });
  }

  render(){
    return (
      // Also every tag you want to use would be nested in one div per component
      <div className="App">
        <h1>I am a react app, haha</h1>
        <p>this is really working.</p>
        <button onClick={this.switchNameHandler}>Switch state</button>
        <Person> Human </Person>
        {/* benefits of using components like Person is reusability */}
        <Person
          click = {this.switchNameHandler} 
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}
        />
        <Person
          click = {this.switchNameHandler} 
          name={this.state.persons[1].name} 
          age = {this.state.persons[1].age}
        />
      </div>
    )
  }
};

export default App;