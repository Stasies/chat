import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { SidebarContainer } from "./StyledComponents";
import { MinMaxContext } from "../context/MinMaxContext";

const Sidebar = () => {
  // const [openSidebar, setOpenSidebar] = useState(true);
  const [windowWidth, setWindowWidth] = useState();
  const { openSidebar } = useContext(MinMaxContext);
  window.addEventListener("resize", resize);
  function resize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <SidebarContainer
      style={
        !openSidebar && windowWidth < 769
          ? { transform: "translateX(-100%)" }
          : {
              transform: "translateX(0)",
            }
      }
    >
      <Navbar />
      <Search />
      <Chats />
    </SidebarContainer>
  );
};

export default Sidebar;
