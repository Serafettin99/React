import React, { useState, useEffect } from 'react';
import Joke from './Joke';

export default function RandomJoke() {
  const [joke, setJoke] = useState();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(resp => resp.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };
  useEffect(getJoke, []);

  if (isLoading) return <h2>Loading ...</h2>;
  if (hasError) return <h2>Error occured ...</h2>;
  return (
    <div>
      <Joke propsJoke={joke} />
    </div>
  );
}
