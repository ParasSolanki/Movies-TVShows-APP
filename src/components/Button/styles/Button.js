import styled from "styled-components/macro";
import { Link as ReachRouter } from "react-router-dom";

export const Link = styled(ReachRouter)`
  display: inline-block;
  padding: ${({ padding }) => padding};

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
