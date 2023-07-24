import React, { useContext } from 'react';
import { NameContext } from './App';

function Child() {
  const contextValue = useContext(NameContext);
  return <h1>Child : {contextValue}</h1>;
}

export default Child;
