import React from 'react';
import './Person.css';

interface PersonProps {
  name: string;
  age: number;
  click?: () => void;
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: string;
}

const Person = (props: PersonProps): JSX.Element => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I&apos;m a {props.name}, and I&apos; {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
