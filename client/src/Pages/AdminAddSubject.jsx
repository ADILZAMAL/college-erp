import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import { adminAddSubject } from "../redux/action/adminAction";
import AdminHomeHelper from "../Components/AdminHomeHelper";

const AdminAddSubject = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [totalLectures, setTotalLectures] = useState("");
  const [std, setStd] = useState("");
  const [year, setYear] = useState("");
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
      adminAddSubject({
        subjectCode,
        subjectName,
        totalLectures,
        std,
        year,
      })
    );
  };

  useEffect(() => {
    if (store.admin.adminAddSubjectFlag) {
      setError({});
    }
  }, [store.admin.adminAddSubjectFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddSubjectFlag) {
      setIsLoading(false);
    }
  }, [store.error, store.admin.adminAddSubjectFlag]);

  return (
    <div>
      {store.admin.isAuthenticated ? (
        <>
          {" "}
          <AdminHomeHelper />
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-center vh-100">
                  <form noValidate onSubmit={formHandler}>
                    <div className="form-group">
                      <label htmlFor="snameId">Subject Name</label>
                      <input
                        onChange={(e) => setSubjectName(e.target.value)}
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": error.subjectName,
                        })}
                        id="snameId"
                      />
                      {error.subjectName && (
                        <div className="invalid-feedback">
                          {error.subjectName}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="scodeId">Subject Code</label>
                      <input
                        onChange={(e) => setSubjectCode(e.target.value)}
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": error.subjectCode,
                        })}
                        id="scodeId"
                      />
                      {error.subjectCode && (
                        <div className="invalid-feedback">
                          {error.subjectCode}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="totalLectures">Total Lectures</label>
                      <input
                        onChange={(e) => setTotalLectures(e.target.value)}
                        type="number"
                        className={classnames("form-control", {
                          "is-invalid": error.totalLectures,
                        })}
                        id="totalLectures"
                      />
                      {error.totalLectures && (
                        <div className="invalid-feedback">
                          {error.totalLectures}
                        </div>
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
                    <div class="row justify-content-center">
                      <div class="col-md-1">
                        {isLoading && (
                          <div
                            class="spinner-border text-primary"
                            role="status"
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {!isLoading && (
                      <button type="submit" className="btn btn-info  ">
                        Add Subject
                      </button>
                    )}
                  </form>
                </div>
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

export default AdminAddSubject;
