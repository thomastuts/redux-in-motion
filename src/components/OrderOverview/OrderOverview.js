import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../Panel/Panel';
import OrderTicket from '../OrderTicket/OrderTicket';

const OrderOverview = () => {
  return (
    <Panel title="Orders" horizontalScroll>
      <OrderTicket
        customerName="Cindy"
        cone={true}
        status="pending"
        scoops={{
          'Vanilla': 1,
          'Chocolate': 3,
        }}
      />
      <OrderTicket
        customerName="Cindy"
        cone={true}
        status="pending"
        scoops={{
          'Vanilla': 1,
          'Chocolate': 3,
        }}
      />
      <OrderTicket
        customerName="Cindy"
        cone={true}
        status="pending"
        scoops={{
          'Vanilla': 1,
          'Chocolate': 3,
        }}
      />
    </Panel>
  );
};

OrderOverview.propTypes = {

};

OrderOverview.defaultProps = {

};

export default OrderOverview;

