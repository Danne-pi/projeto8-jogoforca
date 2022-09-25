import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Gallow from "./areas/Gallow";
import Tips from "./areas/Tips";
import Keywords from "./areas/Keyword"

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ThisApp>
                <Gallow />
                <Tips />
                <Keywords />
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

