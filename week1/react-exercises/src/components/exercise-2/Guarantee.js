import React from 'react';

export default function Guarantee(props) {
  return (
    <div className="inner-guarantee">
      <img src={props.img} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
