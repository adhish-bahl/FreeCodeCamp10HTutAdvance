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
          <SinglePerson key={people.id} {...people} removePerson={removePerson} />
        )
      })}
    </>
  )
}

const SinglePerson = (props) => {
  const {id, name, removePerson} = props;
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={()=> removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling;
