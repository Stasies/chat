import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgSecondary};
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 2;
    transition: 500ms;
  }
`;
export const ChatContainer = styled.div`
  flex: 2;
  position: relative;
`;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;

export const Logo = styled.div`
  font-weight: bold;
`;
export const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row;
  .icon {
    color: ${({ theme }) => theme.contrast};
  }
`;
export const Img = styled.img`
  background-color: grey;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  object-fit: cover;
  border-radius: 50%;
`;
export const Span = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// Search
export const SearchContainer = styled.div`
  border-bottom: 1px solid grey;
`;
export const SearchForm = styled.div`
  padding: 10px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 80%;
  color: ${({ theme }) => theme.text};
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
export const UserChat = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bgLighter};
  }
`;
export const UserChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  gap: 6px;
`;

export const ChatsContainer = styled.div``;
export const P = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ChatInfo = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.bgLighter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const ChatIcons = styled.div`
  display: flex;
  gap: 10px;
  .icon {
    height: 24px;
    cursor: pointer;
  }
`;

//Messages

export const MessagesContainer = styled.div`
  background-color: #19191a;
  padding: 10px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bgSecondary};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.bgLighter};
    /* outline: 1px solid slategrey; */
  }
`;

//input

export const InputContainer = styled.div`
  height: 70px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgLighter};
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Send = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: lightgrey;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.contrast};
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  &.own {
    align-items: flex-end;
    div {
      border-radius: 10px 0 10px 10px;
    }
  }
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  align-items: start;
  justify-content: start;
  gap: 12px;
`;
export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: grey;
  font-weight: 300;
`;
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: fit-content;
  gap: 10px;
`;
export const MessageText = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 0px 10px 10px 10px;
  width: max-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Small = styled.small`
  right: 0;
`;

export const MessageImg = styled.img`
  object-fit: contain;
  max-width: 300px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const Username = styled.div`
  color: ${({ theme }) => theme.contrast};
  padding-left: 10px;
  font-weight: 600;
`;
