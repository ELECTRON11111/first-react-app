import React from 'react';
import './Person.css'

// The React imported is needed to convert our JSX to regular JavaScript

// A component is just a function that returns some JSX
// function Person(){
//     return (
//         <div className='Person'>
//             <h1>I am a person</h1>
//         </div>
//     );
// };

// Advantage the function expression has over function declaration is access to the 'this' keyword
// A component can take 'props' basically attributes that are added to the component 
const person = (props) => {
    // To write dynamic javascript in JSX we use {}
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            
            {/* You can also take the value inputed between the <person></person> tags with props.children property */}

            <p>{props.children}</p>
            {/* I set up two way binding here, it means I specifically set the value of an elem and make provision for changes */}
            <input type = "text" onChange={props.changed} value = {props.name}/>
        </div>
    )

};

/**
 * For components created with classes, the props are accessed using 'this.props'
 */
export default person;