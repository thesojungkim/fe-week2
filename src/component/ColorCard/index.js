import React from "react";
import styled from "styled-components";
import TextBox from "../Text";

const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 11px;
  margin-bottom: 10px;
`;

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color :${(props) => (props.color ? props.color : "blue")};
`;

const ColorCard = (props) => {

  return <CardWrapper >
    <ColorWrapper color={props.color}/>
    <TextBox color={props.color} fontSize={props.fontSize} text_align={props.align}>{props.color}</TextBox>
    </CardWrapper>;
};

export default ColorCard;