import styled from "styled-components";
import forca1 from "../assets/forca0.png"
import forca2 from "../assets/forca1.png"
import forca3 from "../assets/forca2.png"
import forca4 from "../assets/forca3.png"
import forca5 from "../assets/forca4.png"
import forca6 from "../assets/forca5.png"

const forcaStages = [
  forca1, 
  forca2,
  forca3,
  forca4,
  forca5,
  forca6,
]

export default function Gallow() {
    return (
        <ThisGallow>
            <img src={forcaStages[0]} alt=""></img>
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
    top: 5vh;
    left: 5vw;

    img{
      height: 100%;
    }
  `