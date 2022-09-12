import React, { useEffect, useState } from "react";
import {
  ChatsContainer,
  UserChat,
  Img,
  UserChatInfo,
  Span,
  P,
} from "./StyledComponents";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { MinMaxContext } from "../context/MinMaxContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { openSidebar, minimize } = useContext(MinMaxContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    minimize({ type: "Minimize", payload: false });
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  return (
    <ChatsContainer>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <UserChat
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <Img size="50px" src={chat[1].userInfo.photoURL} />
            <UserChatInfo>
              <Span>{chat[1].userInfo.displayName}</Span>
              <P>{chat[1].lastMessage?.text}</P>
            </UserChatInfo>
          </UserChat>
        ))}
    </ChatsContainer>
  );
};

export default Chats;
