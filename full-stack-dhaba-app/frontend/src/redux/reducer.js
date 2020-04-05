import { createStore } from "redux";

const initialState = {
  table: [],
  tableId: null,
  waiter: [],
  waiterId: null,
  menu: [],
  userName: "",
  userNumber: null,
  items: [],
  head: ["ItemName", "Price"],
  total: null,
  paymentMode : "",
  orderId : null,
};

function appReducer(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "TABLE_ID":
      console.log("tableID", action.payload);
      stateCopy.tableId = action.payload;
      return stateCopy;
    case "TABLE_DETAIL":
      console.log("table", action.payload);
      stateCopy.table = action.payload;
      return stateCopy;
    case "WAITER_ID":
      console.log("waiterId", action.payload);
      stateCopy.waiterId = action.payload;
      return stateCopy;
    case "WAITER_DETAIL":
      console.log("table", action.payload);
      stateCopy.waiter = action.payload;
      return stateCopy;
    case "MENU_DETAIL":
      console.log("menu", action.payload);
      stateCopy.menu = action.payload;
      return stateCopy;
    case "ADD_TO_CART":
      stateCopy.items = [...stateCopy.items, action.payload];
      stateCopy.total += action.payload.price;
      console.log(stateCopy.items);
      return stateCopy;
    case "USER_DETAIL":
      console.log("user", action.payload);
      stateCopy.userName = action.payload.userName;
      stateCopy.userNumber = action.payload.userNumber;
      stateCopy.paymentMode = action.payload.paymentMode;
      return stateCopy;
    case "REMOVE_FROM_CART":
      let index = action.payload.index;
      // let index = stateCopy.cart.indexOf(action.payload.val);
      // console.log(action.payload.val,index)
      if (index > -1) {
        stateCopy.items.splice(index, 1);
        stateCopy.total = stateCopy.items.reduce((a, { price }) => a + price, 0);
      }
      return stateCopy;
      case "ORDER_ID":
        console.log("order", action.payload);
        stateCopy.orderId = action.payload;
        return stateCopy;
    default:
      return state;
  }
}

const store = createStore(appReducer);
export default store;
