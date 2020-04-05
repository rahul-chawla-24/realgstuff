const db = require("../database");
var { DataTypes } = require("sequelize");
const Waiter = require("./Waiter");
const Table = require("./Table");

let Order = db.define(
  "order",
  {
    userName: { type: DataTypes.STRING, allowNull: false },
    userMobile: { type: DataTypes.CHAR(10), allowNull: false },
    items: { type: DataTypes.ARRAY(DataTypes.JSON), allowNull: false },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
    paymentMode: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false }
);


Order.hasMany(Table,{foreignKey: {name:"tableId",allowNull:true}});
Table.belongsTo(Order,{foreignKey:"tableId"});
Order.hasMany(Waiter,{foreignKey:{name:"waiterId",allowNull:true}});
Waiter.belongsTo(Order,{foreignKey:"waiterId"});
db.sync().then(res => {});

module.exports = Order;
