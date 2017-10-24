import React, { Component } from 'react';

import * as FLAVORS from '../../constants/flavors';

import Panel from '../Panel/Panel';
import Button from '../Button/Button';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  render() {
    const flavors = Object.keys(this.props.flavors).map(flavorName => (
      <FreezerFlavor
        key={flavorName}
        onClickRestock={() => this.props.onClickRestock(flavorName)}
        onClickFlavor={() => this.props.onClickFlavor(flavorName)}
        flavorName={flavorName}
        scoops={this.props.flavors[flavorName]}
      />
    ));

    return (
      <Panel title={`Freezer (°${this.props.temperature || 0}C)`}>
        <Button label="Add product" onClick={this.props.onClickAddProduct} />
        <br/>
        {flavors}
      </Panel>
    );
  }
}

export default Freezer;

