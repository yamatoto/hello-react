import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'google', age: 33 },
      { name: 'yahoo', age: 23 },
      { name: 'apple', age: 13 },
    ],
    otherState: 'hoge',
  };

  switchNameHandler = (): void => {
    this.setState({
      persons: [
        { name: 'google2', age: 99 },
        { name: 'yahoo2', age: 93 },
        { name: 'apple2', age: 73 },
      ],
    });
  };

  render(): JSX.Element {
    return (
      <div className="App">
        <h1>hello react app {this.state.otherState}</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          yahooooo!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
