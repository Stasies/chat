import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Span,
  Form,
  Input,
  Button,
  P,
} from "./LoginElements";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  const testUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, "test@gmail.com", "123456");
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Span className="logo">Chat</Span>
        <Span>Login</Span>
        <Form onSubmit={handleSubmit}>
          <Input ref={email} type="email" placeholder="email"></Input>
          <Input ref={password} type="password" placeholder="password"></Input>
          <Button>Sign in</Button>
        </Form>
        <P>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </P>
        <P style={{ cursor: "pointer" }} onClick={testUser}>
          Sign in as a TEST USER
        </P>
      </Wrapper>
    </Container>
  );
};

export default Login;
