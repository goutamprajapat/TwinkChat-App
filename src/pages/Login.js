import React from "react";
import "../styles/login.css";
const Login = () => {
  return (
    <>
      <div className=" position-relative bg" style={{ height: "100vh" }}>
        <div className="container-fluid position-absolute top-50 start-50 translate-middle col-4">
          <div className="text-bg-tertiary p-5 rounded-5 login">
            <h2 className="text-center text-white fw-bolder ">Login</h2>
            <form className="p-3">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
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

              <button type="submit" className="btn-lg w-100 btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
