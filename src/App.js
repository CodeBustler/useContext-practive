import React, { createContext } from 'react';
import './style.css';
import Parent from './Parent';

const NameContext = createContext();

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <NameContext.Provider value={'CodeBustler'}>
        <Parent />
      </NameContext.Provider>
    </div>
  );
}

export { NameContext };
