import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminGetAllSubject } from "../../redux/action/adminAction";
import AdminHomeHelper from "../../Components/AdminHomeHelper";

const AdminGetAllSubjects = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(adminGetAllSubject());
  }, []);
  useEffect(() => {
    if (store.admin.allSubject.length !== 0) {
      setIsLoading(false);
    }
  }, [store.admin.allSubject.length]);
  return (
    <div>
      <div>
        {store.admin.isAuthenticated ? (
          <>
            <AdminHomeHelper />
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  {store.admin.allSubject.length !== 0 && (
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Class</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Total Lectures</th>
                        </tr>
                      </thead>
                      <tbody>
                        {store.admin.allSubject.map((res, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{res.std}</td>
                            <td>{res.subjectCode}</td>
                            <td>{res.subjectName}</td>
                            <td>{res.totalLectures}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          history.push("/")
        )}
      </div>
    </div>
  );
};

export default AdminGetAllSubjects;
