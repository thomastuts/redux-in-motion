import React from 'react';

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
      <tr key={flavorName} className="order-ticket__flavor">
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
            <td><strong className="order-ticket__name">{customerName}</strong></td>
            <td>
              <select className="order-ticket__status" value={status} onChange={() => {}}>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
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

export default OrderTicket;


