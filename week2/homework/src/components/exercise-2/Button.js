import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button onClick={props.getPhoto}>Get a dog!</button>
    </div>
  );
}
