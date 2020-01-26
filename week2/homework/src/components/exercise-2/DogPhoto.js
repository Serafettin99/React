import React from 'react';

export default function DogPhoto(props) {
  return (
    <div>
      <img src={props.photoOfDog} alt="Random_Dog Photo" />
    </div>
  );
}
