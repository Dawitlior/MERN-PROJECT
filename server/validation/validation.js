const validateEmail = (email) => {
  const temp = email.indexOd("@");
  const last = email.slice(email.length - 4);

  if (temp > 0 && last == ".com") {
    return true;
  }
  return false;
};
module.exports = { validateEmail };
