import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import './forms.css';

import Freezer from '../Freezer/Freezer';
import NewOrder from '../NewOrder/NewOrder';
import { Column, Row } from '../Grid/Grid';
import OrderOverview from '../OrderOverview/OrderOverview';
import Colleagues from '../Colleagues/Colleagues';

class App extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <main className="app">
        <img className="logo" src="/logo.svg" alt="Mister Melty's Ice Cream"/>
        <Row>
          <Column>
            <Freezer />
          </Column>
          <Column>
            <NewOrder />
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
