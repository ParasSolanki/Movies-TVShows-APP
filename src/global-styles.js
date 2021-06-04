import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  *, *::after, *::before{
    box-sizing: border-box;
    font-family: inherit;
  }

  html, :root{
    --clr-white: white;
    --clr-black: black;

    --bg: #111;

    --clr-primary: #f80000;

    --break-point-sm: 35.75rem; 
    --break-point-md: 48rem; 
    --break-point-lg: 62rem; 
    --break-point-xl: 79.125rem; 
    --break-point-xxl: 87.5rem; 
    --break-point-xxxl: 96rem; 
  }
  body{
    width: 100%;
    min-height: 100vh;
    line-height: 1.6;
    background-color: var(--bg);
    color: var(--clr-white);
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration : none;
    color: var(--clr-white);
    cursor: pointer;
  }

  .container {
    max-width: 79.125rem;
    width:100%;
    margin:0 auto;
    padding: 0 1rem;

    @media (min-width: 35.75rem) {
      max-width: 35.75rem;
    }
    @media (min-width: 48rem) {
      max-width: 48rem;
    }
    @media (min-width: 62rem) {
      max-width: 62rem; 
    }
    @media (min-width: 79.125rem) {
      max-width: 79.125rem;
    }
    @media (min-width: 87.5rem) {
      max-width: 87.5rem;
    }
    @media (min-width: 96rem) {
      max-width: 96rem;
    }
  }
  .container-fluid{
    max-width: 79.125rem;
    width:100%;
    margin:0 auto;
    padding: 0 1rem;

    @media (min-width: 87.5rem) {
      max-width: 87.5rem;
    }
    @media (min-width: 96rem) {
      max-width: 96rem;
    }
  }
  .flex{
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
  }
  
  .card-img{
    width: 13rem;
    height: 9rem;
    object-fit: cover;
    
    @media (min-width: 35.75rem) {
      width: 15.5rem;
      height: 10rem;

    }
    
    @media (min-width: 48rem) {
      height: 10rem;
      width: 17rem;
    }
  }

  ::selection {
    background: rgba(248, 0 , 0, .8);
    color: var(--clr-white)
  }
  ::-moz-selection{
    background: rgba(248, 0 , 0, .8);
    color: var(--clr-white)

  }
`;
