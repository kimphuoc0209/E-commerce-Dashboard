import {
  ORDER_CONFIRMED_FAIL,
  ORDER_CONFIRMED_REQUEST,
  ORDER_CONFIRMED_RESET,
  ORDER_CONFIRMED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../Constants/OrderConstants";

//ALL ORDERsS
export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//  ORDER DETAILS
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//  ORDER DELIVERED
export const orderConfirmedReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CONFIRMED_REQUEST:
      return { loading: true };
    case ORDER_CONFIRMED_SUCCESS:
      return { loading: false, success: true };
    case ORDER_CONFIRMED_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_CONFIRMED_RESET:
      return {};
    default:
      return state;
  }
};
