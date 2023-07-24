import React, { useContext } from 'react';
import Child from './Child';
import { NameContext } from './App';
function Parent() {
  const contextValue = useContext(NameContext);

  return (
    <>
      <h1>Parent : {contextValue}</h1>
      <Child />
    </>
  );
}

export default Parent;
