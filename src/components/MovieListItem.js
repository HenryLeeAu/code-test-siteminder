import React from 'react';

export default function(props) {
  return (
    <li
      onClick={props.onClick}
      name="1"
      className={props.clicked ? 'clicked' : ''}
    >
      <div>{props.title}</div>
      <div className="align-right">{props.year}</div>
    </li>
  );
}
