import styled from "styled-components";

export default function Keywords() {
    return (
        <ThisKeywords>
          <div>
            <WriteThisWords />
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
    }
  `

  function WriteThisWords(){
    return alphabet.map((item)=>(<div>{item}</div>))
  }

  const alphabet = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
  ]