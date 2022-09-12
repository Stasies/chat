import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  MessageContainer,
  MessageWrapper,
  MessageInfo,
  MessageContent,
  Img,
  MessageText,
  Small,
  MessageImg,
  Username,
} from "./StyledComponents";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <MessageContainer
      ref={ref}
      className={message.senderId === currentUser.uid ? "own" : "other"}
    >
      <MessageWrapper
        fd={message.senderId === currentUser.uid ? "row-reverse" : "row"}
      >
        <MessageInfo>
          <Img
            size="50px"
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
          />
        </MessageInfo>
        <MessageContent>
          <Username>
            {message.senderId === currentUser.uid
              ? currentUser.displayName
              : data.user.displayName}
          </Username>
          <MessageText
            // bg={!message.senderId === currentUser.uid ? "white" : "#8da4f1"}
            color={!message.senderId === currentUser.uid ? "black" : "white"}
          >
            {message.text}
            <MessageImg src={message?.img} />
          </MessageText>
        </MessageContent>
      </MessageWrapper>
      <Small>{}</Small>
    </MessageContainer>
  );
};

export default Message;
