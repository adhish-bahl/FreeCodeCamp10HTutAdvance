import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((people) => people.id !== id)
    setPeople(newPeople);
  }

  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({people, removePerson}) => {
  return(
    <>
      {people.map((people)=> {
        return(
          <SinglePerson key={people.id} people={people} removePerson={removePerson} />
        )
      })}
    </>
  )
}

const SinglePerson = (props) => {
  const {id, people, removePerson} = props;
  return (
    <p>
      <h4>{people.name}</h4>
      <button onClick={()=> removePerson(id)}>remove</button>
    </p>
  )
}

export default PropDrilling;
