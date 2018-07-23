import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import NowShowing from '../NowShowing';

const Cinema = (props) => {
  const {id, name, fromGradient, toGradient, movies} = props;
  const style = {'background': `linear-gradient(to right, ${fromGradient} 0%, ${toGradient} 100%)`}
  return (
    <Link to={`cinema/${id}`}>
      <div className="Cinema" style={style}>
        <p>{name}</p>
        <NowShowing movies={movies} />
      </div>
    </Link>
  );
}

export default Cinema;
