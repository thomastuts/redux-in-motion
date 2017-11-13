import { connect } from 'react-redux';
import OrderOverview from './OrderOverview';
import { actions as ordersActions } from '../../ducks/orders';

const mapStateToProps = (state) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  fulfillOrder: (index) => dispatch(ordersActions.fulfillOrder(index)),
  payForOrder: (index) => dispatch(ordersActions.payForOrder(index)),
  cancelOrder: (index) => dispatch(ordersActions.cancelOrder(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderOverview);
