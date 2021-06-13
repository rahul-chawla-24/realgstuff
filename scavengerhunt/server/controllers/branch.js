require('dotenv').config()
const { Branch  } = require('../models');


exports.getBranches = async (req, res) => {
  const { id } = req.params;
  const branch = await Branch.findAll({
    where: {
      id,
    }
  });
  if (!branch) {
    return res.status(400).send({
      message: `No branch found with the id ${id}`,
    });
  }
  return res.send(branch);
};

