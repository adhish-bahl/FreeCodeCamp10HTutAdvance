import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState("");

  const [person, setPerson] = useState({firstName: "", email: "", age:""});
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {...person, id: new Date().getTime().toString()};
    setPeople([...people, newPerson]);
    setPerson({firstName:"", email:"", age:""})
  }

  const changeHandle = (e) => {
    const title = e.target.name;
    const value = e.target.value;
    setPerson({...person, [title]: value});
  }


  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={changeHandle}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={changeHandle}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={changeHandle}
            />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
