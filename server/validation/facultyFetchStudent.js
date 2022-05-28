const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateFetchStudentsInput = (data) => {
  let errors = {};
  data.std = !isEmpty(data.std) ? data.std : "";
  data.section = !isEmpty(data.section) ? data.section : "";

  if (Validator.isEmpty(data.std)) {
    errors.department = "Class field is required";
  }

  if (Validator.isEmpty(data.section)) {
    errors.section = "Section field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateFetchStudentsInput;
