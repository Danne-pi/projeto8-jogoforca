import styled from "styled-components";

export default function Tips() {
    return (
        <ThisTips>
            Tips
        </ThisTips>
    );
  }
  
  const ThisTips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 39vw;
    height: 60vh;
    background-color: aqua;
    position: absolute;
    top: 60px;
    right: 5vw;

  `