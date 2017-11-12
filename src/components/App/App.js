import React, { Component } from 'react';

import FreezerContainer from '../Freezer/FreezerContainer';
import NewOrderContainer from '../NewOrder/NewOrderContainer';
import { Column, Row } from '../Grid/Grid';
import OrderOverview from '../OrderOverview/OrderOverview';
import Colleagues from '../Colleagues/Colleagues';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="app">
        <img className="logo" src="/logo.svg" alt="Mister Melty's Ice Cream"/>
        <Row>
          <Column>
            <FreezerContainer />
          </Column>
          <Column>
            <NewOrderContainer />
          </Column>
        </Row>
        <Row>
          <Column size={3}>
            <OrderOverview />
          </Column>
          <Column size={1}>
            <Colleagues />
          </Column>
        </Row>
      </main>
    );
  }
}

export default App;
