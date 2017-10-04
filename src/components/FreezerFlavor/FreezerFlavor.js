import React from 'react';
import PropTypes from 'prop-types';

import './FreezerFlavor.css';
import Button from '../Button/Button';

const FreezerFlavor = ({ flavorName, scoops }) => {
  return (
    <div className="freezer-flavor">
      <div className="freezer-flavor__inner">
        <div className="freezer-flavor__scoops-counter">{scoops}</div>
        <div className="freezer-flavor__name">{flavorName}</div>
      </div>
      <Button className="freezer-flavor__restock-button" label="Restock"/>
    </div>
  );
};

FreezerFlavor.propTypes = {
  flavorName: PropTypes.string.isRequired,
  scoops: PropTypes.number.isRequired,
};

FreezerFlavor.defaultProps = {

};

export default FreezerFlavor;
