import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  height: 90%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #232324;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;
