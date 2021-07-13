import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(name && email) {
    const tempPerson = {name: name, email:email}
    console.log(tempPerson);
    setPerson((person) => {
      return [...person, tempPerson]
    })
    console.log(person);
    } else {
      console.log('empty values');
    }
    setName("");
    setEmail("");
  }

  return (
    <>
      <article>
        <h1>controlled inputs</h1>

        <form className='form' onSubmit={submitForm}>

          <div className='form-control'>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="firstname" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>

          <div className='form-control'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </div>

          <button type="submit">Add Person</button>
        </form>
        {person.map((person)=> {
          const {name, email} = person;
          return(
            <div className='item'>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
