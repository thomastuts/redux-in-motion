import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import { Column, Row } from '../Grid/Grid';
import ButtonGroup from '../Button/ButtonGroup';
import Button from '../Button/Button';

import './NewOrder.css';

class NewOrder extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Panel title="New order">
        <form className="new-order-form" onSubmit={this.handleFormSubmit}>
          <Row>
            <Column>
              <label htmlFor="customer-name">Customer name</label>
              <input type="text" id="customer-name" name="name" defaultValue="John Doe" />
            </Column>
            <Column>
              <label>Container</label>
              <ButtonGroup>
                <Button label="Cup" priority="primary" />
                <Button label="Cone" priority="secondary" />
              </ButtonGroup>
            </Column>
          </Row>

          <label>Scoops</label>
          <table className="new-order-scoops-table">
            <colgroup>
              <col width="80%"/>
              <col width="20%"/>
            </colgroup>
            <tbody>
            <tr>
              <td>
                <strong>Vanilla</strong>
              </td>
              <td>
                <ButtonGroup>
                  <Button size="small" label="-" priority="primary" />
                  <Button size="small" label={5} priority="secondary" />
                  <Button size="small" label="+" priority="primary" />
                </ButtonGroup>
              </td>
            </tr>
            </tbody>
          </table>

          <Button className="new-order-submit-button" label="Add order"/>
        </form>
      </Panel>
    );
  }
};

export default NewOrder;

