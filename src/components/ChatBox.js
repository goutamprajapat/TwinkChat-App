import React from "react";

const ChatBox = () => {
  return (
    <>
      <div className="" style={{ maxHeight: "100vh" }}>
        <div
          className="container mt-1  d-flex align-items-center "
          style={{ height: "4rem" }}
        >
          <div className=" container">
            <div className="row align-items-center ">
              <div
                className="col-1 bg-danger d-flex justify-content-center align-items-center"
                style={{ borderRadius: "100%", height: "44px", width: "44px" }}
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
      </div>
    </>
  );
};

export default ChatBox;
