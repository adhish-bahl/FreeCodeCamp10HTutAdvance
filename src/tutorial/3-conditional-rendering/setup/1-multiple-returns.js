import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getName = () => {
    fetch(url)
    .then((response123)=>{
      if(response123.status >= 200 && response123.status <= 299)
        return response123.json();
      else{
        setLoading(false);
        setError(true);
        throw new Error(response123.status);
      }
    })
    .then((details)=>{
      console.log(details);
      const user = details.login;
      setName(user);
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
      setError(true);
    })
  }

  useEffect(()=>{
    getName();
  },[])


  if(loading) {
    return(
      <h1>Loading...</h1>
    )
  }

  if(error) {
    return(
      <h1>Error...</h1>
    )
  }
  
  return (
    <>
      <h2>multiple returns</h2>
      <h1>{name}</h1>
    </>
    );
};

export default MultipleReturns;
