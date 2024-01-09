import React from "react";
import { CiSearch } from "react-icons/ci";
const ChatBoxTab = () => {
  let item = [
    "John",
    "Mary",
    "Bob",
    "Alice jhone davida",
    "Tom",
    "Jane",
    "Bill",
    "Susan",
    "Mike",
    "Sarah",
  ];
  return (
    <>
      <div className="overflow-hidden  faded">
        <div className="px-3">
          <h5 className="my-3 ">Chats</h5>
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
              aria-describedby="search"
            />
          </div>

          <div className="text-success">
            <hr />
          </div>

          <div
            className="overflow-hidden scrooll-bar-chat  overflow-y-scroll "
            style={{ maxHeight: "100vh" }}
          >
            {item.map((i, id) => {
              return (
                <div className="mt-3 rounded-2 " key={id}>
                  <div className="card element cursor-pointer hover border-0 text-reset">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col d-flex position-relative justify-content-center g-2 p-2">
                          <span
                            className="bg-success  position-absolute  rounded-5 extra-small ms-2"
                            style={{
                              width: "10px",
                              height: "10px",
                              right: "9px",
                            }}
                          ></span>
                          <div className="avatar avatar-online bg-danger rounded-5 py-3 d-flex justify-content-center align-items-center ">
                            <span className="avatar-text fs-4">{i[0]}</span>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="d-flex align-items-center">
                            <h5 className="me-auto text-truncate card-title">
                              {i}
                            </h5>
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

            {/* vvbdfn */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBoxTab;
