import React from 'react';
import './style.scss';

const Cinema = (props) => {
  const {name} = props;
  return (
    <div className="Cinema">{name}</div>
  );
}

export default Cinema;
