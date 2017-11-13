import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import OrderTicket from '../OrderTicket/OrderTicket';

class OrderOverview extends Component {
  handleChangeStatus = (index, status) => {
    switch (status) {
      case 'fulfilled':
        this.props.fulfillOrder(index);
        break;
      case 'paid':
        this.props.payForOrder(index);
        break;
    }
  };

  render() {
    return (
      <Panel title="Orders" horizontalScroll>
        {this.props.orders.map((order, index) => (
          <OrderTicket
            key={index}
            {...order}
            onChangeStatus={(status) => this.handleChangeStatus(index, status)}
            onCancel={() => this.props.cancelOrder(index)}
          />
        ))}
      </Panel>
    );
  }
};

export default OrderOverview;

