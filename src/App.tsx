// example for hooks (useState,UseEffect,UseCallback, useContext)

import React, { useState, useEffect, useCallback, useContext,useRef } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

interface FunctionComponentProps {
  name: string;
  age: number;
  handleIncrement: () => void;
}

// A class and a function component example
const FunctionComponent: React.FC<FunctionComponentProps> = ({ name, age, handleIncrement }) => {
  // use hooks to get update regarding any state value into function component.
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter(prevCounter => prevCounter + 1);
    handleIncrement();
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{`Age: ${age}`}</p>
      <p>{`Counter: ${counter}`}</p>
      <button onClick={handleIncrementCounter}>Increment Counter</button>
      {/* Pass Data from 1 component to another component */}
      <ChildComponent />
    </div>
  );
};

const App: React.FC = () => {
  // create a Div reference and Using Div reference scroll into Div
  const myDivRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoDiv = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIncrement = () => {
    // scrollIntoDiv();
  };

  return (
    <div>
      <h1>Function Component:</h1>
      <FunctionComponent name="John Doe" age={25} handleIncrement={handleIncrement} />
      <button onClick={scrollIntoDiv}>Scroll into Div</button>
      <div ref={myDivRef} style={{ height: '800px', overflow: 'auto', border: '1px solid black', padding: '10px' }}>
        <h2>Content inside the div</h2>
        <p>Some text...</p>
      </div>
    </div>
  );
};

export default App;