import React, { useContext, useEffect, useState } from "react";
import { MessagesContainer } from "./StyledComponents";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (data) {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
        unsub();
      };
    }
  }, [data]);
  return (
    <MessagesContainer>
      {messages.map((m) => (
        <Message key={m.id} message={m} />
      ))}
    </MessagesContainer>
  );
};

export default Messages;
