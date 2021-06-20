require("dotenv").config();
const { User, Branch, Pincode, Role } = require("../models/index");
const csv = require("csvtojson");

exports.importCsv = async (req, res) => {
  const csvFilePath = `../server/uploads/${req.file.filename}`;
  try {
    let adminrole = await Role.findOne({
      where: {
        type: "admin",
      },
    });
    if (!adminrole)
      adminrole = await Role.create({
        name: "Admin",
        type: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    let branch_manager_role = await Role.findOne({
      where: {
        type: "branch_manager",
      },
    });
    if (!branch_manager_role)
      branch_manager_role = await Role.create({
        name: "Branch Manager",
        type: "branch_manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    const jsonArray = await csv().fromFile(csvFilePath);
    for (let data of jsonArray) {
      let pincodesOfBranch = data["pincode"].split(",");
      let branch = await Branch.findOne({
        where: {
          name: data["branch"],
        },
      });

      if (!branch) {
        let createdBranch = await Branch.create({
          name: data["branch"],
          city: data["city"],
          address: data["address"],
          contact_numbers: data["phone"].split(",") || [],
          institute_name: data["institute_name"],
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        if (createdBranch) {
          branch = createdBranch;
        }
      }

      for (let p of pincodesOfBranch) {
        let pincode = await Pincode.findOne({
          where: {
            value: p,
          },
        });

        if (!pincode) {
          await Pincode.create({
            value: p,
            branchId: branch.id,
          });
        }
      }
      await User.create({
        name: data["branch_incharge"],
        username: `${branch.id}incharge`,
        password: "ScavengerHunt@2021",
        branchId: branch.id,
        roleId: branch_manager_role.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return res.send(jsonArray);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: `Internal Server Error`,
    });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Branch,
        include: [
          {
            model: Pincode,
            as: "pincodes",
          },
        ],
      },
      {
        model: Role,
      },
    ],
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  return res.send(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({
      message:
        "Please provide a username and a password to login!",
    });
  }

  try {
    let user = await User.findOne({
      where: {
        username,
        password,
      },
      include: [
        {
          model: Branch,
          include: [
            {
              model: Pincode,
              as: "pincodes",
            },
          ],
        },
        {
          model: Role,
        },
      ],
    });

    if (!user) {
      return res.status(400).send({
        message: "No user Found !",
      });
    }
    else {
      return res.send(user)
    }
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.createUser = async (req, res) => {
  const { name, username, password } = req.body;
  if (!username || !password || !name) {
    return res.status(400).send({
      message:
        "Please provide a name, username and a password to create a user!",
    });
  }

  let usernameExists = await User.findOne({
    where: {
      username,
    },
  });

  if (usernameExists) {
    return res.status(400).send({
      message: "Username already exists! Try Log in!",
    });
  }

  try {
    let newUser = await User.create({
      name,
      username,
      password,
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: "Please provide a id!",
    });
  }

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  try {
    await user.destroy();
    return res.send({
      message: `User ${user.username} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { name, username, password } = req.body;
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  try {
    if (username) {
      user.username = username;
    }
    if (password) {
      user.password = password;
    }

    user.save();
    return res.send({
      message: `User ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};
