import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Working with states with Functions.( React Hooks )
/**
 * There are several react Hooks, one of which is 'useState' which allows for state Manipulation with Functions
 * All react hooks are have the 'use' in front
 */
const App = () => {
  // the useState method returns an array of two things, i.e current state and a function that allows us to update the state ... 
  //  and return the updated state in such a way that react knows and re-renders the DOM

  /**
   * So unlike the states with classes we can use the useState hooks multiple times
   * The thing about this useState is that once you updated one item's state, without manually placing the
   * unchanged items in that update too, those items will be lost.
   * 
   * So we are to use one hook (useState) for one data item since it can be reused. 
   */

  const [personsState, setPersonsState] = useState({
    persons : [
      {name : "Daniel", age: 19},
      {name : "Wuraola", age: 20},
      {name : "Aisha", age: 20}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');


  // For adding arguments, you need to bind the arguments when you want to input them AT DECLARATION POINT
  const switchStateHandler = () => {
    console.log('Worked');
    // We want to manipulate the state on a click
    // DON'T DO THIS this.state.persons[0].name = 'Opemipo';
  
    // We use a built in method that comes with the Component we installed called useState
    setPersonsState({
      persons: [
        {name : newName, age: 19},
        {name : "Wuraola", age: 23},
        {name : "Aisha", age: 22}
      ],
      otherState: 'something' 
    })
  }

  return (
    // NOTE: the reason why we use 'className' instead of 'class' is because since the JSX
    //       will get compiled into regular javscript, using 'class' which is a reserved
    //       keyword in JavaScript would give an error.
    // Also 'this' is the 'App'
    
    // Also every tag you want to use would be nested in one div per component
    <div className="App">
      <h1>I am a react app, haha</h1>
      <p>this is really working.</p>
      <Person> Human </Person>
      
      {/* Dealing with events */}
      {/* Call the function without a () if not it'd be called before button is clicked */}
      <button onClick = {switchStateHandler}>Switch state</button>
      
      {/* benefits of using components like Person is reusability */}
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
      {/* adding methods as references to components */}
      <Person 
        click = {switchStateHandler}
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age}/>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>

    </div>

    // The React we imported will be used to convert the JSX code to the below
    // the createElement structure has arguments elem, config(attributes), content(as text)
    // React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Hey there!'))
  )
};

// The other way to create a component is with classes
// class App extends Component {
//   render() {
//     return (
//       // with every component, you need to render some HTML to the DOM
//       // The code below is JSX, it is in HTML form but it is not HTML
//       // Its some form of syntatical sugar for dealing with HTML .
//       // When the build command is run, the JSX is converted to plain JavaScript
//       <div className='App'>
//         <h1>I am a react app</h1>
//       </div>
//     );
//   }
// }

export default App;

// "This is a stateful component" - involves state management.

// Once a state changes, the DOM is re-rendered to the page

// this is an Event handler and it is convection to place Handler at the back of the method
// name .... We basically added a function to property of the app
// the ES6 arrow functions allows us to use the 'this' keyword which points to the 'App'