import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  render() {
    return (
      <Panel title="Freezer (°0C)">
        <FreezerFlavor flavorName="Vanilla" scoops={50} />
      </Panel>
    );
  }
}

export default Freezer;

