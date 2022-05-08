import React from "react";
import styled from "styled-components";
import Button from "../Button";
import TextBox from "../Text";
import ColorCard from "../ColorCard";


const CardWrapper = styled.div`
  width: 300px;
  height: 380px;
  border: 1px black solid;
  border-radius: 11px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`;
const StyledImg = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: 150;
  border-radius: 11px;
  
`;

const MediaCard = (props) => {
    return <CardWrapper>
        <StyledImg src = {props.img} width={props.width}/>

        <TextBox margin_right ={props.margin_right} 
        tcolor={props.color} fontWeight={props.fontWeight} 
        fontSize={props.fontSize} align={props.align} >{props.head}</TextBox>

        <TextBox color={props.tcolor2} fontWeight={props.fontWeight2} 
        fontSize={props.fontSize2} margin_right={props.margin_right2 }
        >{props.content}</TextBox>

        <Button backgroundColor={props.backgroundColor}
         color={props.color} fontSize={props.fontsize} >Action</Button>
    
    </CardWrapper>;
};

export default MediaCard;