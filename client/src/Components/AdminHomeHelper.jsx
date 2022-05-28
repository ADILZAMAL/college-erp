import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../redux/action/adminAction";

const Home = () => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(adminLogout());
    history.push("/");
  };
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/addFaculty">
                  ADD FACULTY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/addStudent">
                  ADD STUDENT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/addSubject">
                  ADD SUBJECT
                </Link>
              </li>
              <Link className="nav-link" to="/admin/addAdmin">
                ADD ADMIN
              </Link>
              <Link className="nav-link" to="/admin/allFaculties">
                OUR FACULTIES
              </Link>
              <Link className="nav-link" to="/admin/allStudents">
                OUR STUDENTS
              </Link>
              <Link className="nav-link" to="/admin/allSubject">
                SUBJECTS
              </Link>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropleft">
              <a
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
                data-offset="100,200"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  My profile
                </a>
                <a className="dropdown-item" href="#" onClick={logoutHandler}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
