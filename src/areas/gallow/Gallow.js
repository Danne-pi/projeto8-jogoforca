import styled from "styled-components";

export default function Gallow() {
    return (
        <ThisGallow>
            Gallow
        </ThisGallow>
    );
  }
  
  const ThisGallow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 60vh;
    background-color: aqua;
    position: absolute;
    top: 60px;
    left: 5vw;

  `