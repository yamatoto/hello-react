import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (): JSX.Element => {
  const [personsState, setPersonsState] = useState([
    { name: 'google', age: 33 },
    { name: 'yahoo', age: 23 },
    { name: 'apple', age: 13 },
  ]);

  const [otherState] = useState('otherState!!!!');

  const [showPersonsState, setShowPersonsState] = useState(false);

  const switchNameHandler = (newName: string): void => {
    setPersonsState([
      { name: newName, age: 99 },
      { name: 'yahoo2', age: 93 },
      { name: 'apple2', age: 73 },
    ]);
  };

  const togglePersonsHandler = () => {
    setShowPersonsState(!showPersonsState);
  };

  const nameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonsState([
      { name: 'google', age: 33 },
      { name: event.target.value, age: 23 },
      { name: 'apple2', age: 13 },
    ]);
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  let persons = null;
  if (showPersonsState) {
    persons = (
      <div>
        {personsState.map((person) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              age={person.age}
              click={switchNameHandler.bind(this, 'click!!' + person.name)}
              changed={nameChangedHandler}>
              ああああああああ!
            </Person>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>hello react app {otherState}</h1>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default App;

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: 'google', age: 33 },
//       { name: 'yahoo', age: 23 },
//       { name: 'apple', age: 13 },
//     ],
//     otherState: 'hoge',
//   };

//   switchNameHandler = (): void => {
//     this.setState({
//       persons: [
//         { name: 'google2', age: 99 },
//         { name: 'yahoo2', age: 93 },
//         { name: 'apple2', age: 73 },
//       ],
//     });
//   };

//   render(): JSX.Element {
//     return (
//       <div className="App">
//         <h1>hello react app {this.state.otherState}</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}>
//           yahooooo!
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

// export default App;
