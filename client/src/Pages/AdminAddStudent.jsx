import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { adminAddStudent } from "../redux/action/adminAction";
import AdminHomeHelper from "../Components/AdminHomeHelper";

const AdminAddStudent = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [std, setStd] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [studentMobileNumber, setContactNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherMobileNumber, setFatherContactNumber] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);
  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(
      adminAddStudent({
        name,
        email,
        year,
        std,
        fatherName,
        aadharCard,
        gender,
        section: section.toUpperCase(),
        dob: dob.split("-").reverse().join("-"),
        studentMobileNumber,
        fatherMobileNumber,
      })
    );
  };
  useEffect(() => {
    if (store.admin.adminAddStudentFlag) {
      setError({});
    }
  }, [store.admin.adminAddStudentFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddStudentFlag) {
      setIsLoading(false);
    }
  }, [store.error, store.admin.adminAddStudentFlag]);
  return (
    <div>
      {store.admin.isAuthenticated ? (
        <>
          <AdminHomeHelper />
          <div className="container mt-5">
            <div className="row ">
              <div className="col">
                <form noValidate onSubmit={formHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nameId">Student Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className={classnames("form-control", {
                            "is-invalid": error.name,
                          })}
                          id="nameId"
                        />
                        {error.name && (
                          <div className="invalid-feedback">{error.name}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailId">Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className={classnames("form-control", {
                            "is-invalid": error.email,
                          })}
                          id="emailId"
                        />
                        {error.email && (
                          <div className="invalid-feedback">{error.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="departmentId">Class</label>
                        <select
                          onChange={(e) => setStd(e.target.value)}
                          className={classnames("form-control", {
                            "is-invalid": error.department,
                          })}
                          id="departmentId"
                        >
                          <option>Select</option>
                          <option value="ONE">CLASS 1</option>
                          <option value="TWO">CLASS 2</option>
                          <option value="THREE">CLASS 3</option>
                          <option value="FOUR">CLASS 4</option>
                          <option value="FIVE">CLASS 5</option>
                          <option value="SIX">CLASS 6</option>
                          <option value="SEVEN">CLASS 7</option>
                          <option value="EIGHT">CLASS 8</option>
                          <option value="NINE">CLASS 9</option>
                          <option value="TEN">CLASS 10</option>
                          <option value="ELEVEN">CLASS 11</option>
                          <option value="TWELEVE">CLASS 12</option>
                        </select>
                        {error.department && (
                          <div className="invalid-feedback">
                            {error.department}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="sectionId">Section</label>
                        <select
                          onChange={(e) => setSection(e.target.value)}
                          className={classnames("form-control", {
                            "is-invalid": error.section,
                          })}
                          id="sectionId"
                        >
                          <option>Select</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                          <option value="F">F</option>
                        </select>
                        {error.section && (
                          <div classNameName="invalid-feedback">
                            {error.section}
                          </div>
                        )}
                      </div>
                      <div class="form-group">
                        <label htmlFor="dobId">DOB</label>
                        <input
                          onChange={(e) => setDob(e.target.value)}
                          type="date"
                          className={classnames("form-control", {
                            "is-invalid": error.dob,
                          })}
                          id="dobId"
                        />
                        {error.dob && (
                          <div className="invalid-feedback">{error.dob}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="genderId">Gender</label>
                        <select
                          onChange={(e) => setGender(e.target.value)}
                          class="form-control"
                          id="genderId"
                        >
                          <option>Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="numberId">Contact Number</label>
                        <input
                          onChange={(e) => setContactNumber(e.target.value)}
                          required
                          type="number"
                          class="form-control"
                          id="numberId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fatherId">Father Name</label>
                        <input
                          onChange={(e) => setFatherName(e.target.value)}
                          type="text"
                          class="form-control"
                          id="fatherId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fathercnId">
                          Father Contact Number
                        </label>
                        <input
                          onChange={(e) =>
                            setFatherContactNumber(e.target.value)
                          }
                          type="number"
                          className="form-control"
                          id="fathercnId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="aadharId">Aadhar Card Number</label>
                        <input
                          onChange={(e) => setAadharCard(e.target.value)}
                          type="number"
                          className="form-control"
                          id="aadharId"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1">
                      {isLoading && (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isLoading && (
                    <button type="submit" className="btn btn-info  ">
                      Add Student
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default AdminAddStudent;
