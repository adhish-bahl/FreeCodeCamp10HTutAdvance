import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [error, setError] = useState(false);

  return (
    <>
      <h2>short circuit</h2>
      <h1>John Doe</h1>
      <button className="btn" onClick={()=>setError(!error)}>Toggle Error</button>
      {error && <h2>Error</h2>}
      {error ? <p>Error Occured</p> : <h1>There is No error</h1>}
    </>
  );
};

export default ShortCircuit;
