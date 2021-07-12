import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [count, setCount] = useState(0);

  useEffect(()=> {
    if(count > 0)
      document.title = `${count} new messages`;
  });



  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count+1)}>Click Me</button>
    </>
    );
};

export default UseEffectBasics;
