import styled from "styled-components/macro";

export const Container = styled.div`
  display: inline-block;
`;
export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`;
export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 56.25rem;
  padding: 1rem;
  height: 18rem;
  margin: auto;

  @media (min-width: 35.75rem) {
    height: 23rem;
  }

  @media (min-width: 48rem) {
    height: 26rem;
  }

  @media (min-width: 62rem) {
    height: 29rem;
  }
  iframe {
    height: 100%;
    width: 100%;
  }
`;
export const Button = styled.div`
  display: inline-block;
  padding: 0.3rem 1rem;

  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  background-color: ${({ bg }) =>
    bg === "primary" ? "var(--clr-primary)" : "var(--clr-white)"};
  color: ${({ color }) =>
    color === "white" ? "var(--clr-white)" : "var(--clr-black)"};

  margin-bottom: 1rem;
  margin-right: 0.8rem;

  border: none;
  border-radius: 0.2rem;

  transition: background-color 200ms ease, color 150ms ease;

  &:hover {
    background-color: ${({ bg }) =>
      bg === "primary" ? "var(--clr-white)" : "var(--clr-primary)"};
    color: ${({ color }) =>
      color === "white" ? "var(--clr-black)" : "var(--clr-white)"};
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: var(--clr-white);
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: #111;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
