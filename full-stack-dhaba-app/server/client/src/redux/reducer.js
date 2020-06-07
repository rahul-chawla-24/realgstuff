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
  paymentMode: "",
  orderId: null,
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
      // stateCopy.items = [...stateCopy.items, action.payload];
      // let currentItem = {
      //   ItemName : "",

      // }
      let index = stateCopy.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let totalPrice;
      console.log(index);
      if (index !== -1) {
        let currentItem = {
          ...stateCopy.items[index],
          quantity: stateCopy.items[index].quantity + 1,
          price:
            stateCopy.items[index].price + stateCopy.items[index].originalPrice,
        };
        console.log("here" , action.payload , currentItem)
        stateCopy.items[index] = currentItem;
      } else {
        let currentItem = {
          ...action.payload,
          quantity: 1,
          originalPrice: action.payload.price,
        };
        console.log(currentItem);
        stateCopy.items.push(currentItem);
      }
      stateCopy.total = stateCopy.items.reduce((a, { price }) => a + price, 0);
      console.log(stateCopy.items);
      return stateCopy;
    case "USER_DETAIL":
      console.log("user", action.payload);
      stateCopy.userName = action.payload.userName;
      stateCopy.userNumber = action.payload.userNumber;
      stateCopy.paymentMode = action.payload.paymentMode;
      return stateCopy;
    case "REMOVE_FROM_CART":
      let indexOfArray = stateCopy.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // let index = stateCopy.cart.indexOf(action.payload.val);
      // console.log(action.payload.val,index)
      console.log(indexOfArray);
      if (indexOfArray > -1) {
        console.log("remove", stateCopy.items[indexOfArray]);
        if (stateCopy.items[indexOfArray].quantity > 1) {
          let currentItems = {
            ...stateCopy.items[indexOfArray],
            quantity: stateCopy.items[indexOfArray].quantity - 1,
            price:
              stateCopy.items[indexOfArray].price -
              stateCopy.items[indexOfArray].originalPrice,
          };
          console.log("remove", currentItems);
          stateCopy.items[indexOfArray] = currentItems;
        } else {
          stateCopy.items.splice(indexOfArray, 1);
        }
        stateCopy.total = stateCopy.items.reduce(
          (a, { price }) => a + price,
          0
        );
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
