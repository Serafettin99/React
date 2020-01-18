import React from 'react';

export default function Button({ setCount }) {
  return (
    <div>
      <button onClick={setCount}>Add 1! </button>
    </div>
  );
}
