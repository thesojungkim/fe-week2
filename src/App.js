import ColorCard from "./component/ColorCard";
import TextBox from "./component/Text";
import MediaCard from "./component/MediaCard";

function App() {
  return (
    <>
    <MediaCard img ="https://p4.wallpaperbetter.com/wallpaper/13/870/486/puppy-backgrounds-for-desktop-hd-backgrounds-wallpaper-preview.jpg" 
    fontSize="25px" margin_right="3.5cm" margin_right2="2.1cm"
    tcolor2="gray" color="white" backgroundColor="#7794DF" head="귀여운 멍멍이"content="귀엽다,,우리집에도 천사있음,," width="280px"/>
    
    <MediaCard img="https://ww.namu.la/s/c6aefb607af27e7a6cebfc4c474907f6efcf731a18d7ca1280e4d8a63aa48be7e7e040150ff430a359bb2696f873c8ac5873f9ac2953845b77c176b28b0a198cd4b41679367b73e89ebb9be08d6ca5c17495c1c6297bf701498d466251a1f7e3"
    color="white" fontSize="25px"   margin_right="5mm" margin_right2="3.6cm"
    tcolor2="gray" backgroundColor="#7794DF" head="그냥 자꾸 생각나는 부부,,"content="어제 스티커도 샀음,," width="280px"/> 
  
    <MediaCard img="https://img1.daumcdn.net/thumb/R720x0/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fshare%2Fdf522dc04bdb4a6c87cb11d6948c90d5.png"
     color="white" margin_right="2.5cm" margin_right2="3.6cm" 
      fontSize="25px" tcolor2="gray" backgroundColor="#7794DF" head="리액트 어렵ㄷㅏ,,"content="집인데 집가고 싶다,," width="280px"/> 
   
    <MediaCard img="https://static.toiimg.com/thumb/79693966.cms?width=680&height=512&imgsize=150513"
     color="white"  margin_right="2.5cm" margin_right2="3.6cm"
     fontSize="25px" tcolor2="gray" backgroundColor="#7794DF" head="햄버거 먹고싶다,,,"content="버거 맛집 어디더라,,"width="280px" /> 
   
    <MediaCard img="https://i.ytimg.com/vi/JHWCHcC0R10/maxresdefault.jpg"
     color="white"  margin_right="1cm" margin_right2="5.5cm"
     fontSize="25px" tcolor2="gray" backgroundColor="#7794DF" head="어제 순두부찌개 먹었다"content="맛있었음" width="280px"/> 
    </>
  );
}
export default App;


