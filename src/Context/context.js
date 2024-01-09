import { createContext, useContext, useState } from "react";

const chatContext = createContext();
const ChatProvider = ({ children }) => {
  const [theme, setheme] = useState("light");
  const [tabs, setActiveTabs] = useState("chat");
  const themeMode = (theme) => {
    return setheme(theme);
  };
  const tabComponenst = (tab) => {
    return setActiveTabs(tab);
  };

  const chatdb = {
    themeMode,
    theme,
    tabComponenst,
    tabs,
  };
  return <chatContext.Provider value={chatdb}>{children}</chatContext.Provider>;
};

export const useChats = () => {
  return useContext(chatContext);
};

export default ChatProvider;
