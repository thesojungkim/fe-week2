# 멋쟁이 사자처럼 10기 FE 2주차 과제 설계 방식과 코드 설명🦁

# 실습 1

### Text 컴포넌트

##### styled-components

```
const StyledText = styled.div`
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")} ;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ?  props.font_weight: "bold") };
  margin-right: ${(props) => (props.margin_right ?  props.margin_right : "1cm") };
  margin-top:4mm;
  `;

```

- 삼항연산자를 통해서 따로 값을 주지 않았을 때를 대비하여 기본값을 설정해주었다.

##### TextBox

```
const TextBox = (props) => {
  return <StyledText color={props.color} margin_right={props.margin_right } font_weight={props.fontWeight} font_size={props.fontSize} > {props.children}</StyledText>;
};

export default TextBox;

```

- TextBox를 통해 App.js에 적용할 변수명을 설정하였다.

### App.js

```
 <TextBox color="blue" fontWeight="400" fontSize="16px">
        hihi
      </TextBox>
      <TextBox color="red" fontWeight="1000" fontSize="100px">
        hihi
      </TextBox>
```

- TextBox를 통해 문구를 넣고 color,fontWeight,fontSize를 설정하였다.

# 실습 2 (컬러카드)

```
const CardWrapper = styled.div`
  width: 300px;
  height: 430px;
  border: 1px black solid;
  border-radius: 11px;
  margin-bottom: 10px;
`;
// 컬러카드와 문구 전체를 감싸는 박스//

const ColorWrapper = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color :${(props) => (props.color ? props.color : "blue")};
`;
//컬러카드만을 감싸는 박스//

const ColorCard = (props) => {

  return <CardWrapper >
    <ColorWrapper color={props.color}/>
    <TextBox color={props.color} fontSize={props.fontSize} text_align={props.align}>{props.color}</TextBox>
    </CardWrapper>;
};

export default ColorCard;
```

# 실습 3 (미디어카드)

MediaCard, Button 컴포넌트를 만들었다.

### 1. Button 컴포넌트

##### styled-components

```
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
```

- 버튼의 크기, 버튼 안 텍스트 폰트사이즈 등에 기본값을 주고 버튼의 배경색, 버튼 안 텍스트 폰트컬러에는 삼항연산자를 통해 기본값을 주었다.

##### Button

```
const Button = (props) => {
  console.log(props);
  return (
    <StyledButton
      position={props.position}
      backgroundColor={props.backgroundColor}
      color={props.color}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
```

- Button를 통해 App.js에 적용할 변수명을 설정하였다.

### 2. MediaCard 컴포넌트

##### styled-components

```
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
```

- 카드를 둘러싸고 있는 박스(CardWrapper)와 박스 안 이미지의 styled-components를 만들었다. -이때 사진의 넓이가 다 다른 점을 고려하여 사진의 넓이는 삼항연산자로 나타냈디.

##### MediaCard

```
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
```

- <CardWrapper>를 통해 감싸주고 가장 상단엔 이미즈를, <TextBox>2개를 다음 순서로 넣었으며 하단엔 <Button>를 넣었다.

### 3. App.js

```
 <MediaCard
        img="https://i.ytimg.com/vi/JHWCHcC0R10/maxresdefault.jpg"
        color="white"
        margin_right="1cm"
        margin_right2="5.5cm"
        fontSize="25px"
        tcolor2="gray"
        backgroundColor="#7794DF"
        head="어제 순두부찌개 먹었다"
        content="맛있었음"
        width="280px"
      />

```

- <MediaCard>안에 이미 이미지, 텍스트박스, 버튼이 있기 때문에 변수들에 맞는 값을 넣어주었다.
