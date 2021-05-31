import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.7);

  overflow: hidden;

  z-index: 1;

  pointer-events: none;

  .fade-out {
    animation: fade-out 500ms linear forwards;
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      display: none;
      opacity: 0;
    }
  }
`;

export const Loader = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 3;
  border: 4px solid var(--clr-white);
  top: 50%;
  animation: loader 2s infinite ease;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: var(--clr-white);
  animation: loader-inner 2s infinite ease-in;

  @keyframes loader-inner {
    0% {
      height: 0%;
    }

    25% {
      height: 0%;
    }

    50% {
      height: 100%;
    }

    75% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
`;
