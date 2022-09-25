import styled from "styled-components";

export default function Keywords() {
    return (
        <ThisKeywords>
          Keywords
        </ThisKeywords>
      );
  }
  
  const ThisKeywords = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 22vh;
    background-color: aqua;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  `