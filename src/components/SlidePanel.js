import { IoLogoTwitter } from "react-icons/io";
import {
  CiEdit,
  CiUser,
  CiBellOn,
  CiChat1,
  CiSettings,
  CiDark,
  CiBrightnessUp,
} from "react-icons/ci";
import ChatBoxTab from "./ChatBoxTab";
import NewChatTab from "./NewChatTab";
import AllUsers from "./AllUsers";
import Notification from "./Notification";
import { useChats } from "../Context/context";
import ChatSettings from "./ChatSettings";
import ChatBox from "./ChatBox";
const SlidePanel = () => {
  const { tabs, tabComponenst, themeMode, theme } = useChats();

  const tab = [
    {
      name: "chat",
      components: <ChatBoxTab />,
    },
    {
      name: "edit",
      components: <NewChatTab />,
    },
    {
      name: "user",
      components: <AllUsers />,
    },
    {
      name: "notification",
      components: <Notification />,
    },
    {
      name: "settings",
      components: <ChatSettings />,
    },
  ];
  const handleTabClick = (tab) => {
    tabComponenst(tab);
  };
  return (
    <>
      <div className=" row  g-0 ">
        <div
          className="d-grid gx-4 col-auto main-color"
          style={{ maxHeight: "100%" }}
        >
          <div className="d-flex flex-column justify-content-between align-items-center">
            <div className=" fs-1 text-color-white">
              <IoLogoTwitter />
            </div>
            <div className="">
              <div className="d-flex flex-column gap-5">
                <CiEdit
                  onClick={() => handleTabClick("edit")}
                  className="fs-5 hover-pink cursor-pointer "
                />
                <CiUser
                  onClick={() => handleTabClick("user")}
                  className="fs-5 hover-pink  cursor-pointer"
                />
                <div
                  onClick={() => handleTabClick("chat")}
                  className="position-relative cursor-pointer"
                >
                  <CiChat1 className="fs-5 hover-pink   " />
                  <span className="position-absolute chat-msg secondary-color rounded-5 px-2">
                    2
                  </span>
                </div>

                <div
                  onClick={() => handleTabClick("notification")}
                  className="position-relative  cursor-pointer"
                >
                  <CiBellOn className="fs-5 hover-pink " />
                  <span className="position-absolute bell-icon-msg secondary-color rounded-5 "></span>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex flex-column gap-3">
                {theme === "light" ? (
                  <CiDark
                    onClick={() => themeMode("dark")}
                    className="fs-5 hover-pink"
                  />
                ) : (
                  <CiBrightnessUp
                    onClick={() => themeMode("light")}
                    className="fs-5 hover-pink"
                  />
                )}
                <CiSettings
                  onClick={() => handleTabClick("settings")}
                  className="fs-5 hover-pink"
                />
                <CiUser className="fs-4 hover-pink" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ maxHeight: "100vh" }}
          className="main-color-2 container col-3 overflow-hidden "
        >
          {tab.map((t, id) => {
            const { name, components } = t;
            return <div key={id}>{tabs === name && components}</div>;
          })}
        </div>
        <div
          className="col container main-color"
          style={{ maxHeight: "100vh" }}
        >
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default SlidePanel;
