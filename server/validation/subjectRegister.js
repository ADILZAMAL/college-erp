const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateSubjectRegisterInput = (data) => {
  let errors = {};
  data.subjectName = !isEmpty(data.subjectName) ? data.subjectName : "";
  data.subjectCode = !isEmpty(data.subjectCode) ? data.subjectCode : "";
  data.std = !isEmpty(data.std) ? data.std : "";
  data.totalLectures = !isEmpty(data.totalLectures) ? data.totalLectures : "";

  if (Validator.isEmpty(data.subjectName)) {
    errors.subjectName = " Subject Name field is required";
  }

  if (Validator.isEmpty(data.subjectCode)) {
    errors.subjectCode = "Subject Code field is required";
  }

  if (Validator.isEmpty(data.std)) {
    errors.department = "Std field is required";
  }

  if (Validator.isEmpty(data.totalLectures)) {
    errors.totalLectures = "Total Lecture field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSubjectRegisterInput;
