import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Keywords from "./areas/keywords/Keywords";
import Gallow from "./areas/gallow/Gallow";
import Tips from "./areas/tips/Tips";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ThisApp>
                <Keywords />
                <Gallow />
                <Tips />
            </ThisApp>
        </>
    );
  }

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
`
const ThisApp = styled.div`
  width: 100vw;
  height: 100vh;
`;