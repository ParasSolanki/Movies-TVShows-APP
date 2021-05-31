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

  .section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .container{
    max-width: var(--break-point-xl);
    width:100%;
    margin:0 auto;
    padding: 0 1rem;
    
  }
  @media (min-width: var(--break-point-sm)){
    .container {
      max-width: var(--break-point-sm);
    }
  }
  @media (min-width: var(--break-point-md)){
    .container {
      max-width: var(--break-point-md);
    }
  }
  @media (min-width: var(--break-point-lg)){
    .container {
      max-width: var(--break-point-lg);
    }
  }
  @media (min-width: var(--break-point-xl)){
    .container {
      max-width: var(--break-point-xl);
    }
  }
  @media (min-width: var(--break-point-xxl)){
    .container {
      max-width: var(--break-point-xxl);
    }
  }
  @media (min-width: var(--break-point-xxxl)){
    .container {
      max-width: var(--break-point-xxxl);
    }
  }

  .flex{
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
  }
  .mb-8{
    margin-bottom: 2rem;
  }
  .mb-2{
    margin-bottom: 0.5rem;
  }
  .text-3xl {
    font-size: 1.875rem;
  }
  .text-base {
    font-size: 1rem;
  }
  .text-gray-500{
    color: var(--clr-gray-500);
  }
  .font-normal{
    font-weight: normal;
  }
  .text-gray-800{
    color: var(--clr-gray-800);
  }
  .text-blue-950{
    color: var(--clr-blue-950);
  }
  
`;
