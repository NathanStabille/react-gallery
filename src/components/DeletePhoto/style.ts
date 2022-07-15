import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  img {
    background-color: #27282f;
    max-width: 20px;
    padding: 5px;
    border-radius: 100%;

    img:hover {
      cursor: pointer;
      background-color: #ccc;
      transition: 0.3s;
    }
  }
`;

export const DeleteModal = styled.div`
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */

  div {
    display: block;
    background-color: #fff;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    color: black;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin-top: 30px;
  }
  .buttonModal {
    flex-direction: row;
    justify-content: space-evenly;
  }
  button {
    width: 80px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    background-color: #27282f;

    &:hover {
      background-color: black;
      cursor: pointer;
    }
  }
  .yes:hover {
    background-color: red;
  }
`;
