import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")} ;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ?  props.font_weight: "bold") };
  margin-right: ${(props) => (props.margin_right ?  props.margin_right : "1cm") };
  margin-top:4mm;
  `;

const TextBox = (props) => {
  return <StyledText color={props.color} margin_right={props.margin_right } font_weight={props.fontWeight} font_size={props.fontSize} > {props.children}</StyledText>;

};

export default TextBox;
