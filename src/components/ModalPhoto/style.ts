import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    display: block;
    max-width: 80%;
    max-height: 60%;
    margin: 80px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 1px solid;
  }
`;
