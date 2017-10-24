import React, { Component } from 'react';

import { actions } from '../../ducks/freezer';
import store from '../../store';
import * as FLAVORS from '../../constants/flavors';

import Freezer from './Freezer';

class FreezerContainer extends Component {
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

  handleClickFlavor = (flavorName) => {
    store.dispatch(actions.removeScoop(flavorName));
  };

  render() {
    return (
      <Freezer
        flavors={this.state.flavors}
        temperature={this.state.temperature}
        onClickRestock={this.handleClickRestock}
        onClickFlavor={this.handleClickFlavor}
        onClickAddProduct={this.handleClickAddProduct}
      />
    );
  }
}

export default FreezerContainer;

