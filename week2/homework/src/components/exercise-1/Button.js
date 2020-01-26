import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button onClick={props.getFriend}>Get a Friend!</button>
    </div>
  );
}
