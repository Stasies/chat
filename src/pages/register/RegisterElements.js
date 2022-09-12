import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #a7bcff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: white;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const Span = styled.span`
  font-size: 14px;
  &.logo {
    color: #5d5b8d;
    font-weight: bold;
    font-size: 24px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;
export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid #a7bcff;
  outline: none;
  &#file {
    display: none;
  }
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;
export const Button = styled.button`
  color: white;
  background-color: #7b96ec;
  padding: 10px;
  font-weight: bold;
  border: none;
  width: 100%;
`;
export const P = styled.p`
  color: #5d5b8d;
  font-size: 12px;
  margin-top: 10px;
`;
export const Label = styled.label`
  color: #8da4f1;
  font-size: 12px;
  cursor: pointer;
`;
