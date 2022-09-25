import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Keywords from "./components/keywords";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ThisApp>
                <Keywords />
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
  background-color: aqua;
  position: relative;
`;