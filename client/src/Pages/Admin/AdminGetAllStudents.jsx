import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminGetAllStudent } from "../../redux/action/adminAction";
import AdminHomeHelper from "../../Components/AdminHomeHelper";
import classnames from "classnames";

const AdminGetAllFaculty = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({});
  const history = useHistory();

  useEffect(() => {
    dispatch(adminGetAllStudent());
  }, []);
  useEffect(() => {
    if (store.admin.allStudent.length !== 0) {
      setIsLoading(false);
    }
  }, [store.admin.allStudent.length]);
  return (
    <div>
      {store.admin.isAuthenticated ? (
        <>
          <AdminHomeHelper />
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                {store.admin.allStudent.length !== 0 && (
                  <table className="table border">
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Section</th>
                      </tr>
                    </thead>
                    <tbody>
                      {store.admin.allStudent.map((res, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{res.registrationNumber}</td>
                          <td>{res.name}</td>
                          <td>{res.email}</td>
                          <td>{res.section}</td>
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
  );
};

export default AdminGetAllFaculty;
