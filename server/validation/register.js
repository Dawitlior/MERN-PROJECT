const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegister = (user) => {
  errors = {};
  user.firstName = isEmpty(user.firstName) ? "" : user.firstName;

  if (validator.isEmpty(user.firstName)) errors.firstName = "First Name Is required";
  if (!validator.equals(user.password, user.confirmPassword)) errors.confirmPassword = "Passwords not match";


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
