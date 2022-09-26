import styled from "styled-components";
import Gallow from "./Gallow";
import Tips from "./Tips";
import {  useState, createContext  } from "react";

export const UserContext = createContext();

export default function MyWrapper() {
    
    const [clicked, setClicked] = useState([])
    const [hooked, setHooked] = useState(-1)

    function WriteTheseWords(){
      return alphabet.map((item)=>(<div onClick={() => setClicked([...clicked, item])}
      className={clicked.includes(item) ? "selected" : ""}
      key={item}
      >{item.toUpperCase()}</div>))
    }

    return (
        <UserContext.Provider value={{clicked, hooked, setHooked}}>
          <Gallow image={hooked}/>
          <Tips />
          <ThisKeywords>
            <div>
              <WriteTheseWords />
            </div>
          </ThisKeywords>
        </UserContext.Provider>
    );
  }
const ThisKeywords = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 90vw;
height: 28vh;
background-color: aqua;
position: absolute;
bottom: 5vh;
left: 50%;
transform: translateX(-50%);
padding: 25px;
box-sizing: border-box;

div{
  gap: 16px;
  flex-wrap: wrap;
  display: flex;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 16px;
  }

  .selected{
    background-color: gray;
    pointer-events: none;
  }
}
`
const alphabet = [
'a', 'b', 'c', 'd', 'e',
'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y',
'z']