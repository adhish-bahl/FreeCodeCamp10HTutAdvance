import React, { useState } from 'react';

const UseStateObject = () => {

  const [details, setDetails] = useState({ name: "Peter", age: 25, message: "Random Message"})

  return (
    <>
      <h2>useState object example</h2>
      <h3>{details.name}</h3>
      <h3>{details.age}</h3>
      <h4>{details.message}</h4>
      <button className="btn">Change Message</button>
    </>
  );
};

export default UseStateObject;
