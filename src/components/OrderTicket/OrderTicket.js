import React from 'react';
import PropTypes from 'prop-types';

import './OrderTicket.css';

const STATUSES = [
  'pending',
  'fulfilled',
  'paid',
];

const OrderTicket = ({ customerName, createdAt, cone, scoops, status }) => {
  const flavorRows = Object.keys(scoops).map(flavorName => {
    const amountOfScoopsForFlavor = scoops[flavorName];
    return (
      <tr className="order-ticket__flavor">
        <td>{flavorName}</td>
        <td style={{ textAlign: 'right' }}>{amountOfScoopsForFlavor}</td>
      </tr>
    );
  });
  const totalScoops = Object.keys(scoops).reduce(
    (total, flavorName) => total + scoops[flavorName],
    0
  );

  return (
    <div className="order-ticket">
      <table className="order-ticket__table">
        <tbody>
          <tr className="order-ticket__name-and-status">
            <td><strong>{customerName}</strong></td>
            <td>
              <select value={status}>
                {STATUSES.map(s => <option value={s}>{s}</option>)}
              </select>
            </td>
          </tr>
          <tr className="order-ticket__product-info">
            <td colSpan={2}><strong>{cone ? 'Cone' : 'Cup'}</strong> — {totalScoops} scoops</td>
          </tr>
          {flavorRows}
        </tbody>
      </table>
    </div>
  );
};

OrderTicket.propTypes = {
  customerName: PropTypes.string,
  createdAt: PropTypes.number,
  cone: PropTypes.bool,
  scoops: PropTypes.object,
  status: PropTypes.string,
};

OrderTicket.defaultProps = {
  
};

export default OrderTicket;


