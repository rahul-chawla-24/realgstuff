const initialState = {
  areaList: [
    "Jayanagar",
    "Basavanagudi",
    "JP Nagar",
    "Padmanabhanagar",
    "Banashankari",
    "Uttarahalli",
    "Kumaraswamy",
    "Girinagar"
  ],
  categoryList: [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
    "Hardware shop",
    "Flower",
    "Newsagent",
    "Furniture"
  ],
  shopList: [
    {
      shopName: "DUKAAN 1",
      area: "Jayanagar",
      category: "Grocery",
      openingDate: "2020-03-01",
      closingDate: "2020-03-25",
      isOpened: true
    },
    {
      shopName: "DUKAAN 2",
      area: "Jayanagar",
      category: "Grocery",
      openingDate: "2020-03-15",
      closingDate: "2020-03-25",
      isOpened: false
    }
  ],
  shopListCopy: [
    {
      shopName: "DUKAAN 1",
      area: "Jayanagar",
      category: "Grocery",
      openingDate: "2020-03-01",
      closingDate: "2020-03-25",
      isOpened: true
    },
    {
      shopName: "DUKAAN 2",
      area: "Jayanagar",
      category: "Grocery",
      openingDate: "2020-03-15",
      closingDate: "2020-03-25",
      isOpened: false
    }
  ],
  areaFilter: "All", // by default first
  categoryFilter: "All", // by default first
  dateFilter: "All" // by default first
};

function appReducerFunction(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SUBMIT":
      console.log("REDUCER->", action.payload);
      let openDate = Date.parse(action.payload.openingDate);
      let closeDate = Date.parse(action.payload.closingDate);
      let todaysDate = new Date();
      if (todaysDate <= closeDate && todaysDate >= openDate) {
        action.payload.isOpened = true;
      } else {
        action.payload.isOpened = false;
      }
      console.log("REDUCER->", action.payload);
      stateCopy.shopList.push(action.payload);

      console.log("whole array:", stateCopy.shopList);
      stateCopy.shopListCopy = stateCopy.shopList.slice();
      if (stateCopy.areaFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.area === stateCopy.areaFilter
        );
      }

      if (stateCopy.categoryFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.category === stateCopy.categoryFilter
        );
      }
      if (stateCopy.dateFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(shop => {
          if (stateCopy.dateFilter === "Open") {
            return shop.isOpened === true;
          } else if (stateCopy.dateFilter === "Close") {
            return shop.isOpened === false;
          }
        });
      }
      console.log("Final array:", stateCopy.shopListCopy);
      return stateCopy;

    case "AREA_FILTER_CHANGE":
      console.log(action.payload);
      stateCopy.shopListCopy = stateCopy.shopList.slice();
      stateCopy.areaFilter = action.payload;
      if (stateCopy.areaFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.area === stateCopy.areaFilter
        );
      }

      if (stateCopy.categoryFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.category === stateCopy.categoryFilter
        );
      }
      if (stateCopy.dateFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(shop => {
          if (stateCopy.dateFilter === "Open") {
            return shop.isOpened === true;
          } else if (stateCopy.dateFilter === "Close") {
            return shop.isOpened === false;
          }
        });
      }
      console.log(stateCopy.shopListCopy);
      return stateCopy;

    case "CATEGORY_FILTER_CHANGE":
      console.log(action.payload);
      stateCopy.shopListCopy = stateCopy.shopList.slice();
      stateCopy.categoryFilter = action.payload;

      if (stateCopy.areaFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.area === stateCopy.areaFilter
        );
      }

      if (stateCopy.categoryFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.category === stateCopy.categoryFilter
        );
      }
      if (stateCopy.dateFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(shop => {
          if (stateCopy.dateFilter === "Open") {
            return shop.isOpened === true;
          } else if (stateCopy.dateFilter === "Close") {
            return shop.isOpened === false;
          }
        });
      }

      console.log(stateCopy.shopListCopy);
      return stateCopy;
    case "DATE_FILTER_CHANGE":
      console.log(action.payload);
      stateCopy.shopListCopy = stateCopy.shopList.slice();
      stateCopy.dateFilter = action.payload;

      if (stateCopy.areaFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.area === stateCopy.areaFilter
        );
      }

      if (stateCopy.categoryFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(
          shop => shop.category === stateCopy.categoryFilter
        );
      }
      if (stateCopy.dateFilter !== "All") {
        stateCopy.shopListCopy = stateCopy.shopListCopy.filter(shop => {
          if (stateCopy.dateFilter === "Open") {
            return shop.isOpened === true;
          } else if (stateCopy.dateFilter === "Close") {
            return shop.isOpened === false;
          }
        });
      }

      console.log(stateCopy.shopListCopy);
      return stateCopy;
    default:
      return state;
  }
}

export default appReducerFunction;
