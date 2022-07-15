import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  border-radius: 10px;
`;

export const FormArea = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #spanSymbol {
    transform: translateY(-10%);
  }

  .bn31 {
    background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
    border-radius: 40px;
    box-sizing: border-box;
    color: #00a84f;
    display: flex;
    height: 50px;
    width: 50px;
    font-size: 40px;
    padding: 4px;
    position: relative;
    text-decoration: none;
  }

  .bn31:hover {
    color: #fff;
  }

  .bn31 .bn31span {
    align-items: center;
    background: #0e0e10;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
  }

  .bn31:hover .bn31span {
    background: transparent;
  }

  input {
    display: none;
  }

  .bn632-hover {
    width: 120px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:focus {
    outline: none;
  }

  .bn632-hover.bn18 {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
`;
