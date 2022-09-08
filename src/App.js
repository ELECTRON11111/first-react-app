import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// creating a styled button 
// we can also add dynamic or conditional styles using ${} since styled componets use template literals
// One way to create a component
class App extends Component {
  state = {
    persons : [
      {
        name: "dan", 
        age : 19,
        id: "hquwg712"
      },
      {
        name: "idana",
        age: 22,
        id: "hdekqhii3i"
      },
      {
        name: "human",
        age: 19,
        id: "djkweu238"
      }
    ],
    otherState: "some stuff",
    showPersons: false
  };

  nameChangedHandler = (e, id) => {
    // console.log(e, id);
    // Remember to always work with copies of the arrays/objects you use, ensuring state immutability
    const persons = [...this.state];
    const Person = persons.find(person => person.id === id );
    Person.name = e.target.value;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    // This decides to display the persons or not
    const doesShow = this.state.showPersons? false : true; 
    this.setState({
      showPersons: doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // With React, we should always ensure state immutability
    // Meaning we shouldn't change state values without setting state instead we create a copy
    // and make changes to the copy before updating the state with that copy 
    const persons = [...this.state.persons];
    // Delete one item from the person index
    persons.splice(personIndex, 1);
    // update the state
    this.setState( {persons: persons} );
  }

  render(){
    // remember : Everything in React is JavaScript
    // So when the Render method is called what ever javascript we write here will run
    //  So we use that for writing cleaner dynamic and conditional content

    // set a default value
    let persons = null;
  
    if (this.state.showPersons) {
      persons =  (
        <div>
          {/* The map method also gives access to the index of each elem in the array  */}
          {/* Once we're listing components From an array, For efficiency sake, react needs a special identifier for each item it wants to render*/}
          {/* It compares the DOM with a virtual DOM which shows DOM before re-rendering so for efficiecy sake */}
          {/* It only rerenders where changes were made if its able to identify what changed, so we add a key .. so we add an id to each person and set it as the key */}
          {this.state.persons.map((person, index) => {
            // The key always has to be on the outer element in the map method
            // The ErrorBoundary Component is a higher order Component 
            // Its higher order 'cause it wraps the Person component
            return <ErrorBoundary key = {person.id}>
                      <Person 
                        name = {person.name} 
                        age = {person.age} 
                        click = {() => this.deletePersonHandler(index)}
                        changed = {(e) => this.nameChangedHandler(e, person.id)}
                      />
                    </ ErrorBoundary>
          })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
      
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push("red");
    }
    if (this.state.persons.length <= 1){
      classes.push("bold");
    }

    return (
      // Also every tag you want to use would be nested in one div per component 
      <div className="App">
        <h1>I am a react app, haha</h1>
        <p className= {classes.join(' ')}>this is really working.</p>
        
        <button
          className='button'
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    )
  }
};

export default App;