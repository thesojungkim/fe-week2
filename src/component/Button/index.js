import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;

  height: 50px;
  width: 280px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 5mm;
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton  position={props.position} backgroundColor={props.backgroundColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
