import React from "react";
import { CiSearch } from "react-icons/ci";

const NewChatTab = () => {
  return (
    <>
      <div>
        <div className="px-3 faded">
          <div className="my-3 fs-4 ">Create Chat</div>
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
        </div>
      </div>
    </>
  );
};

export default NewChatTab;
