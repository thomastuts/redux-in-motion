import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

const Freezer = () => {
  return (
    <Panel title="Freezer">
      <FreezerFlavor flavorName="Vanilla" scoops={50} />
    </Panel>
  );
};

Freezer.propTypes = {};

Freezer.defaultProps = {};

export default Freezer;

