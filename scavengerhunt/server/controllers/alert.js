require("dotenv").config();
const { Branch, Alert, BranchAlerts ,Pincode } = require("../models");

exports.createAlertLog = async (req, res) => {
  const { pincodes, text } = req.body;
  try {
    const alert = await Alert.create({
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    let branches = []
    for (p of pincodes) {
      const branch = await Branch.findOne({
        where: {
          id: p.branchId,
        },
      })
      if (branch) {
        await BranchAlerts.create({
          branchId: branch.id,
          alertId: alert.id,
        });
        branches.push({...branch.dataValues})
      }
    }
    return res.send(branches);

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `Internal Server Error`,
    });
  }
};

exports.getAlertByBranch = async (io, data) => {
  const { id, role } = data;
  let branchArr = []
  
  if(!role)
  return

  if (role.type === "admin") {
    let branchalerts = await BranchAlerts.findAll();
    for (let i = 0; i < branchalerts.length; i++) {
      const alert = await Alert.findOne({
        where: {
          id: branchalerts[i].alertId,
        },
      });
      let branchObj = {
        ...branchalerts[i].dataValues,
        alert: alert,
        text: alert.text,
        timeStamp: alert.createAt
      }
      branchArr.push(branchObj)
    }
    io.emit("getAlerts", {
      data: branchArr || [],
      message: "success",
    });
  }
  else if(role.type === "branch_manager"){
  const branch = await Branch.findOne({
    where: {
      id: id,
    },
  });
  let branchalerts = await BranchAlerts.findAll({
    where: {
      branchId: branch.id,
    },
  });

  for (let i = 0; i < branchalerts.length; i++) {
    const alert = await Alert.findOne({
      where: {
        id: branchalerts[i].alertId,
      },
    });
    let branchObj = {
      ...branchalerts[i].dataValues,
      alert: alert,
      text: alert.text,
      timeStamp: alert.createAt
    }
    branchArr.push(branchObj)
  }

  io.emit("getAlerts", {
    data: branchArr,
    message: "success",
  });
}
};

