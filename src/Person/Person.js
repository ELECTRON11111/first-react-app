import React from 'react'
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
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            
            {/* You can also take the value inputed between the <person></person> tags with props.children property */}

            <p>{props.children}</p>
        </div>
    )

};

/**
 * For components created with classes, the props are accessed using 'this.props'
 * 
 * "This is a stateless Component" - it does not deal with state management.
 */
export default person;