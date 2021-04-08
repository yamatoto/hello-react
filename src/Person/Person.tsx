import React from 'react';

interface PersonProps {
  name: string;
  age: number;
  children?: string;
}

const Person = (props: PersonProps): JSX.Element => {
  return (
    <div>
      <p>
        I&apos;m a {props.name}, and I&apos; {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
