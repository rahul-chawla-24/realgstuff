const passport = require("passport");
const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const config = require("./jwt_config.json");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
      passReqToCallback: true
    },
    async function (req,email, password, done) {
      try {
        let userData = {
          email : email.trim(),
          password : password.trim()
        }
        let user = await User.findAll({ where: { email : userData.email } });
        if (user.length === 0 || user[0].password !== userData.password) {
          const error = {
            name: "invalid",
            message: "Invalid email or password",
          };
          return done(error, false);
        }

        const payload = {
          sub: user._id,
        };

        // create a token string
        const token = jwt.sign(payload, config.jwtSecret);
        const data = {
          name: user[0].firstName +" "+ user[0].lastName
        };

        return done(null, token, data);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
      passReqToCallback: true
    },
    async function (req, email, password, done) {
      try {
        let user = await User.findAll({ where: { email } });
        console.log('hey',user);
        if(user.length > 0) {
          const error = { name: "email", message: "Email already exist" };
          return done(error);
        }

        let registerUser = await User.create({
          firstName : req.body.firstName.trim(),
          lastName : req.body.lastName.trim(),
          email : email.trim(),
          password : password.trim(),
        });

        return done(null);
      } catch (error) {
        console.log('*******', error);
        return done(error);
      }
    }
  )
);

module.exports = passport;
