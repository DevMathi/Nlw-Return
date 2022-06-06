import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    :root{ 
        --purple: #8257e6;
        --background-body: #09090a ;
        --text-color: #f4f4f5;
    }

    *{
        text-decoration: none;
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: none;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        background-color: var(--background-body);
        
    }

    #root{
         min-height: 100vh;
    }

    input, textarea, label{
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        background: none;
        border: none;
    }
`

