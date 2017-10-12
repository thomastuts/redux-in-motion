import React, { Component } from 'react';

import { actions } from '../../ducks/freezer';
import store from '../../store';
import * as FLAVORS from '../../constants/flavors';

import Panel from '../Panel/Panel';
import Button from '../Button/Button';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
    temperature: store.getState().freezer.temperature,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors,
        temperature: store.getState().freezer.temperature,
      });
    });

    setInterval(() => {
      const randomTemperature = -Math.round(Math.random() * 10);
      store.dispatch(actions.updateTemperature(randomTemperature));
    }, 2000);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClickRestock = (flavorName) => {
    const amount = parseInt(window.prompt(`Enter amount to restock ${flavorName}`));

    if (!isNaN(amount)) {
      store.dispatch(actions.addProductToFreezer(flavorName, amount));
    }
  };

  handleClickAddProduct = () => {
    const allAvailableFlavors = Object.keys(FLAVORS);
    const flavorName = window.prompt(`Enter flavor name to restock. (Choose from: ${allAvailableFlavors.join(', ')})`);

    if (FLAVORS[flavorName]) {
      this.handleClickRestock(flavorName);
    }
  };

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor
        key={flavorName}
        onClickRestock={() => this.handleClickRestock(flavorName)}
        flavorName={flavorName}
        scoops={this.state.flavors[flavorName]}
      />
    ));

    return (
      <Panel title={`Freezer (°${this.state.temperature || 0}C)`}>
        <Button label="Add product" onClick={this.handleClickAddProduct} />
        <br/>
        {flavors}
      </Panel>
    );
  }
}

export default Freezer;

