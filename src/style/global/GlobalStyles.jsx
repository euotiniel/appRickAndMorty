import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: ${props => props.theme.fonts.body};
        background-color: #000000f0;
    }
`

