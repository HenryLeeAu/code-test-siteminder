import React from 'react';

export default function({ onClick, clicked, title, year }) {
  return (
    <li onClick={onClick} className={clicked ? 'clicked' : ''}>
      <div>{title}</div>
      <div className="align-right">{year}</div>
    </li>
  );
}
