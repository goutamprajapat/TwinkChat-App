import React from "react";
import "../styles/login.css";
const Register = () => {
  return (
    <>
      <div className=" position-relative bg" style={{ height: "100vh" }}>
        <div className="container-fluid position-absolute top-50 start-50 translate-middle col-4">
          <div className="text-bg-tertiary p-5 rounded-5 login">
            <h2 className="text-center text-white fw-bolder ">Register</h2>
            <form className="p-3">
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="fullName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cPassword" className="form-label">
                  Conform Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="cPassword"
                />
              </div>

              <button type="submit" className="btn-lg btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
