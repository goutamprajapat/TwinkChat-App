import React from "react";

const ChatBox = () => {
  return (
    <>
      <div className="row g-0" style={{ maxHeight: "100vh" }}>
        <div
          className="container mt-1  col-12 d-flex align-items-center "
          style={{ height: "4rem" }}
        >
          <div className=" container">
            <div className="row align-items-center ">
              <div
                className="col-1 bg-danger d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "100%",
                  height: "44px",
                  width: "44px",
                }}
              >
                <span className=" fs-3 d-flex align-align-items-center ">
                  B
                </span>
              </div>
              <div className="col">
                <div>
                  <div className="fs-5">Davide</div>
                  <span className="text-success">Typing..</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-success">
          <hr />
        </div>
        <div className="container col-8 ">
          <input
            type="text"
            className="position-absolute w-50 form-control bg-black  bottom-0 mb-3"
          />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
