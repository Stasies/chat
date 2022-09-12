import React from "react";
import { Container, Wrapper } from "./HomeElements";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Chat />
      </Wrapper>
    </Container>
  );
};

export default Home;
