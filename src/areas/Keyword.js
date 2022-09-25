import styled from "styled-components";
import { useState } from "react";

export default function Keywords() {
    const initialState = [];
    const [clicked, setClicked] = useState(initialState)

  
    function WordSelected(thisOne) {
      setClicked([...clicked, thisOne]);
    }

    function refacthis(){
        setClicked([...initialState ]);
    }
  
    function WriteTheseWords(){
      return alphabet.map((item)=>(<div onClick={() => WordSelected(item)}
      className={clicked.includes(item) ? "selected" : ""}
      key={item}
      >{item}</div>))
    }
  
    return (
        <ThisKeywords>
          <div>
            <WriteTheseWords />
            <button onClick={refacthis}>Replay</button>
          </div>
        </ThisKeywords>
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
   'A', 'B', 'C', 'D', 'E',
   'F', 'G', 'H', 'I', 'J',
   'K', 'L', 'M', 'N', 'O',
   'P', 'Q', 'R', 'S', 'T',
   'U', 'V', 'W', 'X', 'Y',
   'Z']