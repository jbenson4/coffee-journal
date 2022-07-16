import React from "react";
import './Dosage.scss';
import { ReactComponent as Bean } from './images/bean.svg';

const Dosage = () => {
  return (
    <div className="coffee-control">
      <Bean className="bean" />
      <div className="coffee-weight">20g</div>
    </div>
  )
}

export default Dosage;