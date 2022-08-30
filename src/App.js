import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// One way to create a component
function App() {
  return (
    // NOTE: the reason why we use 'className' instead of 'class' is because since the JSX
    //       will get compiled into regular javscript, using 'class' which is a reserved
    //       keyword in JavaScript would give an error.
    
    // Also every tag you want to use would be nested in one div per component
    <div className="App">
      <h1>I am a react app, haha</h1>
      <p>this is really working.</p>
      <Person> Human </Person>
      {/* benefits of using components like Person is reusability */}
      <Person name="Daniel" age = "19"/>
      <Person name="Simisoluwa" age = "20"/>
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