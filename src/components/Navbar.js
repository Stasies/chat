import React, { useContext } from "react";
import {
  NavbarContainer,
  Logo,
  User,
  Img,
  Span,
  Button,
} from "./StyledComponents";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { MinMaxContext } from "../context/MinMaxContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <NavbarContainer>
      <Logo>Chat</Logo>
      <User>
        <Img size="24px" src={currentUser.photoURL} />
        <Span>{currentUser.displayName}</Span>
        <LogoutIcon onClick={() => signOut(auth)} className="icon" />
      </User>
    </NavbarContainer>
  );
};

export default Navbar;
