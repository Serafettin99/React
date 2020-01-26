import React from 'react';

export default function Joke({ propsJoke }) {
  return (
    <div>
      <h1>{propsJoke.setup}</h1>
      <p>{propsJoke.punchline}</p>
    </div>
  );
}
