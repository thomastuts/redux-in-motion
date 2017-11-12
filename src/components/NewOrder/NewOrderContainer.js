import { connect } from 'react-redux';
import NewOrder from './NewOrder';
import { actions as ordersActions } from '../../ducks/orders';

const mapDispatchToProps = (dispatch) => ({
  placeOrder: (orderData) => dispatch(ordersActions.placeOrder(orderData)),
});

export default connect(null, mapDispatchToProps)(NewOrder);
