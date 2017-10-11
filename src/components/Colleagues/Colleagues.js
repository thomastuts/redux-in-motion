import React, { Component } from 'react';

import Panel from '../Panel/Panel';

import './Colleagues.css';

const Colleague = ({ photo, name, status }) => (
  <tr className="colleague">
    <td>
      <img className="colleague__photo" src={photo} alt={name} />
    </td>
    <td className="colleague__info">
      <div className="colleague__name">{name}</div>
      <div className="colleague__status">{status}</div>
    </td>
  </tr>
);

class Colleagues extends Component {
  render() {
    return (
      <Panel title="Colleagues">
        <table className="colleagues-table">
          <colgroup>
            <col width="0" />
            <col width="100%" />
          </colgroup>
          <tbody>
            <Colleague
              photo="https://randomuser.me/api/portraits/women/36.jpg"
              name="Victoria"
              status="Checked in"
            />
          </tbody>
        </table>
      </Panel>
    );
  }
}

export default Colleagues;
