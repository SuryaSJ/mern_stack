import React from 'react';

import './Card.css';

const Card = props => {
  console.log("Card");
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
