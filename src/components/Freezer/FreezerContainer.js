import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../ducks/freezer';
import * as FLAVORS from '../../constants/flavors';

import Freezer from './Freezer';

class FreezerContainer extends Component {
  componentDidMount() {
    setInterval(() => {
      const randomTemperature = -Math.round(Math.random() * 10);
      this.props.updateTemperature(randomTemperature);
    }, 2000);
  }

  handleClickRestock = (flavorName) => {
    const amount = parseInt(window.prompt(`Enter amount to restock ${flavorName}`));

    if (!isNaN(amount)) {
      this.props.addProductToFreezer(flavorName, amount);
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
    this.props.removeScoop(flavorName);
  };

  render() {
    return (
      <Freezer
        flavors={this.props.flavors}
        temperature={this.props.temperature}
        onClickRestock={this.handleClickRestock}
        onClickFlavor={this.handleClickFlavor}
        onClickAddProduct={this.handleClickAddProduct}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  flavors: state.freezer.flavors,
  temperature: state.freezer.temperature,
});

const mapDispatchToProps = (dispatch) => ({
  updateTemperature: (temperature) => dispatch(actions.updateTemperature(temperature)),
  addProductToFreezer: (flavorName, amount) => dispatch(actions.addProductToFreezer(flavorName, amount)),
  removeScoop: (flavorName) => dispatch(actions.removeScoop(flavorName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerContainer);

