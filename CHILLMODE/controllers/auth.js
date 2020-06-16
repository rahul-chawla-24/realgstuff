const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const validator = require("validator");

// validation for signup
function validateSignupForm(payload) {
  let errors = "";
  let isFormValid = true;
  let message = "";
  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors = "Please provide a correct email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors = "Password must have at least 8 characters.";
  }

  if (
    !payload ||
    typeof payload.firstName !== "string" ||
    payload.firstName.trim().length === 0
  ) {
    isFormValid = false;
    errors = "Please provide your full name.";
  }

  if (
    !payload ||
    typeof payload.lastName !== "string" ||
    payload.lastName.trim().length === 0
  ) {
    isFormValid = false;
    errors = "Please provide your full name.";
  }

  if (!isFormValid) {
    message = errors;
  }
  console.log(message)
  return {
    success: isFormValid,
    message,
    errors,
  };
}

// validation for login
function validateLoginForm(payload) {
  let errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    payload.email.trim().length === 0
  ) {
    isFormValid = false;
    errors = "Please provide your email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors = "Please provide your password.";
  }

  if (!isFormValid) {
    message = errors;
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
}

module.exports.signUp = (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }
   return passport.authenticate('register', (err) => {
    if (err) {
      if (err.name === "email") {
        return res.status(409).json({
          success: false,
          message: err.message,
          errors: {
            email: "This email is already taken.",
          },
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "You have successfully signed up! Now you should be able to log in.",
    });
  })(req, res, next);
};

module.exports.createSession = (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }

  return passport.authenticate("login", (err, token, userData) => {
    if (err) {
      if (err.name === "invalid") {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form.",
      });
    }

    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userData,
    });
  })(req, res, next);
};

module.exports.checkAuthentication = async (req,res,next) => {
  try {
    console.log(req.user)
    const user = await User.findOne({_id : req.user});
    if (!user) throw Error('User Does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}