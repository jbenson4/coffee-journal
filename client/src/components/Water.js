import React from "react";
import './Water.scss';
import { ReactComponent as Droplet } from './images/droplet.svg';

const Water = () => {
  return (
    <div className="water-control">
      <Droplet className="droplet" />
      <div className="water-grams">340g</div>
    </div>
  )
}

export default Water;