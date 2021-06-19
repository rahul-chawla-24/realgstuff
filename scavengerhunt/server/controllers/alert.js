require('dotenv').config()
const { Branch , Alert , BranchAlerts} = require('../models');

exports.createAlertLog = async (req, res) => {
  const { branches , text } = req.body;
 try {
    const alert = await Alert.create({
        text,
        createdAt:new Date,
        updatedAt:new Date
      });
    
      for (b of branches){
        const branch = await Branch.findOne({
            where: {
              id: b,
            },
        });
        if(branch){
           await BranchAlerts.create({
              branchId: branch.id,
              alertId: alert.id,
            })
        }
      }
      return res.send(alert);
 } catch (error) {
   console.log(error)
    return res.status(500).send({
        message: `Internal Server Error`,
      });
 }
};

exports.getAlertByBranch = async (io,data) => {
  const { id , role } = data;

  if( role.type === "admin"){
    let branchalerts = await BranchAlerts.findAll({
      where: {
        branchId: branch.id
      }
    })
    if (!branchalerts) {
      io.emit('noalert', {
        message: `No alerts found with your branch`,
      } );
    }
    io.emit('getAlerts',{
      data: branchalerts,
      message: "success"
    });
  }
  const branch = await Branch.findOne({
    where: {
      id: 1,
    },
  });
  let branchalerts = await BranchAlerts.findAll({
    where: {
      branchId: branch.id
    }
  })
  if (!branchalerts) {
    io.emit('noalert', {
      message: `No alerts found with your branch`,
    } );
  }
  io.emit('alert',{
    data: branchalerts,
    message: "success"
  });
};

exports.getAlertByBranchApi = async (req,res) => {
  const { branchId , role } = req.params;

  if( role === "admin"){
    let branchalerts = await BranchAlerts.findAll()
    return res.send(branchalerts);
  }

  let branchalerts = await BranchAlerts.findAll({
    where: {
      branchId: branchId
    }
  })
  return res.send(branchalerts);
};


exports.getAlert = async (req, res) => {
  const { id } = req.params;
  const alert = await Alert.findOne({
    where: {
      id,
    }
  });
  if (!alert) {
    return res.status(400).send({
      message: `No alerts found with the id ${id}`,
    });
  }
  return res.send(alert);
};