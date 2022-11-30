const keys = require("./keys");
const Auth = require("../models/users-model");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const options = {
    secretOrKey: keys.secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };
  
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      Auth.findById(jwt_payload.id)
        .then((user) => {
          console.log("users found");
          return done(null, false);
        })
        .catch((err) => {
          console.log(err.message);
          return done(err);
        });
    })
  );
}; 
