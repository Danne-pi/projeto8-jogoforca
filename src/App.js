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
  body {
    padding: 0;
    margin: 0;
  }
`
const ThisApp = styled.div`
  width: 100vw;
  height: 100vh;
`;