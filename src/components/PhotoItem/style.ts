import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;

  #photo {
    max-width: 100%;
    max-height: 150px;
    display: block;
    margin: auto;
    border-radius: 10px;
  }

  img:hover {
    cursor: pointer;
    filter: contrast(130%);
  }
`;
