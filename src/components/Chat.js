import React, { useContext } from "react";
import { ChatContainer, ChatInfo, Span, ChatIcons } from "./StyledComponents";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from "./Messages";
import InputSection from "./InputSection";
import { ChatContext } from "../context/ChatContext";
import { MinMaxContext } from "../context/MinMaxContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { minimize, openSidebar } = useContext(MinMaxContext);
  return (
    <ChatContainer>
      <ChatInfo>
        <Span onClick={() => minimize({ type: "Minimize", payload: true })}>
          {data?.user?.displayName}
        </Span>
        <ChatIcons>
          <VideocamIcon className="icon" />
          <PersonAddIcon className="icon" />
          <MoreHorizIcon className="icon" />
        </ChatIcons>
      </ChatInfo>
      <Messages />
      <InputSection />
    </ChatContainer>
  );
};

export default Chat;
