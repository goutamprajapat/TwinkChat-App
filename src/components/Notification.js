import React from "react";
import { CiSearch } from "react-icons/ci";

const Notification = () => {
  let item = [
    "Priscilla Riggs",
    "Marcella Schwartz",
    "Martina Ford",
    "Morgan Pug",
    "Dona Wuan",
  ];
  return (
    <>
      <div>
        <div className="px-3 faded">
          <div className="my-3 fs-4 ">Notification</div>
          <div className="input-group main-color rounded-2">
            <span
              className="input-group-text bg-transparent border-0
          "
              id="search"
            >
              <CiSearch className="text-light fw-bolder fs-4" />
            </span>
            <input
              type="text"
              name=""
              placeholder="search user name ..."
              className="form-control form-control-lg bg-transparent border-0 shadow-none text-light"
              id="searchmsg"
            />
          </div>

          <div className="text-success">
            <hr />
          </div>
          <div>
            {item.map((i, id) => {
              return (
                <div className="mt-3 rounded-2  mb-1" key={id}>
                  <span className="text-secondary d-flex align-items-center extra-small ms-2">
                    <span> 12:20 PM </span>
                    <hr className="w-75 mx-1" />
                  </span>
                  <div className="card element cursor-pointer hover border-0 text-reset">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col d-flex justify-content-center g-0 p-2">
                          <div className="avatar avatar-online bg-danger rounded-5 d-flex justify-content-center align-items-center ">
                            <span className="avatar-text fs-4">{i[0]}</span>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="d-flex align-items-center mb-3">
                            <h6 className="me-auto text-truncate mb-0 card-title">
                              {i}
                            </h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="w-100 ellipsis me-auto">
                              Hello! Yeah, I'm going to meet my friend of mine
                              at the departments stores as soon as possible.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
