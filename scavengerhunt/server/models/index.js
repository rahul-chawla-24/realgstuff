const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  username:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING
  },
});

const Branch = db.define('branch', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contact_numbers: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  institute_name: {
    type: Sequelize.STRING
  },
  city:{
    type: Sequelize.STRING
  },
  address:{
    type: Sequelize.STRING
  }
});

const Role = db.define('role', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
},{
  timestamps: false,
});

const Pincode = db.define('pincode', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
},{
  timestamps: false,
});

const Alert = db.define('alert', {
  text: {
    type: Sequelize.STRING,
  },
  active: {
     type: Sequelize.BOOLEAN
  }
});

const BranchAlerts = db.define("BranchAlerts", {
  branchId: {
    type: Sequelize.INTEGER,
    references: {
      model: Branch, 
      as: 'branch',
      key: "id",
    },
  },
  alertId: {
    type: Sequelize.INTEGER,
    references: {
      model: Alert,
      as: 'alert',
      key: "id",
    },
  },
});

Branch.belongsToMany(Alert, {  
  through : BranchAlerts
})

Alert.belongsToMany(Branch,{  
 through : BranchAlerts
})

Branch.hasMany(Pincode, {
  foreignKey: 'branchId', 
  as: 'pincodes'
})
Pincode.belongsTo(Branch, {
  foreignKey: 'branchId', 
  onDelete: 'CASCADE'
})

Branch.hasOne(User),
User.belongsTo(Branch,{foreignKey: 'branchId'})

Role.hasMany(User),
User.belongsTo(Role,{foreignKey: 'roleId'});


db.sync({alter:true})

module.exports = { User, Branch, Pincode, Role, Alert, BranchAlerts}