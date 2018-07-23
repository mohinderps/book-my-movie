import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const Cinema = (props) => {
  const {id, name} = props;
  return (
    <Link to={`cinema/${id}`}>
      <div className="Cinema">{name}</div>
    </Link>
  );
}

export default Cinema;
