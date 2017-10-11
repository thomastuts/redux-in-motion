import React, { Component } from 'react';

import store from '../../store';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors,
      });
    });
  }

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor key={flavorName} flavorName={flavorName} scoops={this.state.flavors[flavorName]} />
    ));

    return (
      <Panel title="Freezer (°0C)">
        {flavors}
      </Panel>
    );
  }
}

export default Freezer;

