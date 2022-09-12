import React, { useRef, useState } from "react";
import {
  Container,
  Wrapper,
  Span,
  Form,
  Input,
  Button,
  P,
  Label,
} from "./RegisterElements";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const picture = e.target[3].files[0];
    if (picture) {
      const imageRef = ref(storage, `images/${picture.name}`);
      const uploadTask = uploadBytesResumable(imageRef, picture);
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        uploadTask.on(
          "state_changed",
          (error) => {
            setError(true);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(auth.currentUser, {
                  displayName: username,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", auth.currentUser.uid), {
                  displayName: username,
                  email: email,
                  photoURL: downloadURL,
                  uid: auth.currentUser.uid,
                });
                await setDoc(doc(db, "userChats", auth.currentUser.uid), {});
                navigate("/");
              }
            );
          }
        );
      } catch (error) {
        setError(true);
      }
    } else {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/chat-2b2ce.appspot.com/o/images%2F149071.png?alt=media&token=d6ed0e2c-f6b8-493c-b367-580c9276b312",
      });
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        displayName: username,
        email: email,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/chat-2b2ce.appspot.com/o/images%2F149071.png?alt=media&token=d6ed0e2c-f6b8-493c-b367-580c9276b312",
        uid: auth.currentUser.uid,
      });
      await setDoc(doc(db, "userChats", auth.currentUser.uid), {});
      navigate("/");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Span className="logo">Chat</Span>
        <Span>Register</Span>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="user name"></Input>
          <Input type="email" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <Label htmlFor="file">Add an avatar</Label>
          <Input type="file" id="file"></Input>
          <Button>Sign up</Button>
          {error && <span>Something went wrong</span>}
        </Form>
        <P>
          Have an account? <Link to={"/login"}>Login</Link>
        </P>
      </Wrapper>
    </Container>
  );
};

export default Register;
