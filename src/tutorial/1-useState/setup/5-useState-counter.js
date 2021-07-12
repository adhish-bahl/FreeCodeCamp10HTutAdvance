import React, { useState } from 'react';

const UseStateCounter = () => {

    const [simpleCount, setSimpleCount] = useState(0);

  return (
    <>
      <h2>useState counter example</h2>
      <h2 style={{marginTop:"60px"}}>Regular Counter</h2>
      <h1>{simpleCount}</h1>
      <button className="btn" onClick={() => setSimpleCount(simpleCount-1)}>Decrease</button>
      <button className="btn" onClick={() => setSimpleCount(0)}>Reset</button>
      <button className="btn" onClick={() => setSimpleCount(simpleCount+1)}>Increase</button>
      <h2 style={{marginTop:"60px"}}>Regular Counter</h2>
      <h1>0</h1>
      <button className="btn" style={{marginBottom:"60px"}}>Increase Later</button>
    </>
    );
};

export default UseStateCounter;
