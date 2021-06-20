require('dotenv').config()
const { Pincode, Branch  } = require('../models');


exports.getPincodes = async (req, res) => {
  const pincodes = await Pincode.findAll({
    include: [
        {
          model: Branch,
        },
      ],
  });
  if (!pincodes) {
    return res.status(400).send({
      message: `No branch found with the id ${id}`,
    });
  }
  return res.send(pincodes);
};

