import React, { useState, useEffect } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then(resp => resp.json())
      .then(data => {
        setDogPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => getDogPhoto(), []);

  if (isLoading) return <h2>Loading ...</h2>;
  if (hasError) return <h2>Error occured ...</h2>;

  return (
    <div>
      <Button getPhoto={getDogPhoto} />
      {dogPhotos.message.map((dogPhoto, i) => (
        <DogPhoto photoOfDog={dogPhoto} key={i} />
      ))}
    </div>
  );
}
