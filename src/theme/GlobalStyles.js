

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    body{
    font-family: ${props => props.theme.fonts.base};
    font-size: 16px; /* 1rem = 10px*/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    //background-color: #0f172a;
    box-sizing: border-box;
    height: 100vh;
    overflow: hidden;
}
    

    a{
        text-decoration: none;}
    }

    html{
    font-size: 62.5%;
    scroll-snap-type: y mandatory;
    overscroll-behavior-y: none;
    }
`
export default GlobalStyles;