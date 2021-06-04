import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  position: relative;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) {
    height: ${({ height }) => (height ? height : "100vh")};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 5.625rem;

  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 600;

  &:focus,
  &:focus-within {
    outline: 2px solid var(--clr-primary);
    outline-offset: 2px;
  }
`;
export const Group = styled.div`
  max-width: 15rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: ${({ active }) => (active === true ? "bold" : "normal")};
  color: ${({ active }) =>
    active === true ? `var(--clr-primary)` : `var(--clr-white)`};
`;
export const Search = styled.div`
  min-height: 2.3rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  background-color: transparent;
  color: var(--clr-white);
  width: ${({ activeSearch }) => (activeSearch === true ? "12.3rem" : "0")};
  opacity: ${({ activeSearch }) => (activeSearch === true ? "1" : "0")};
  margin-left: ${({ activeSearch }) => (activeSearch === true ? ".3rem" : "0")};
  font-family: inherit;
  border: 1px solid rgba(225, 225, 225, 0.9);
  border-radius: 0.3rem;
  font-size: 0.85rem;
  outline: none;
  transition: width 300ms ease-in-out, opacity 300ms ease;

  &::placeholder {
    font-family: inherit;
    color: rgba(225, 225, 225, 0.9);
  }
  &:focus-within,
  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 9rem;
  padding-bottom: 4rem;
  @media (min-width: 48rem) {
    width: 55%;
  }
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => (src ? src : null)}) top left / cover no-repeat;

  @media (min-width: 48rem) {
    height: ${({ height }) => (height ? height : "100vh")};
  }
`;
export const HeroTitle = styled.h3`
  font-size: 2rem;
  3rem;
  color: var(--clr-white);
  margin-bottom: 0.5rem;
  line-height: 1;
  font-family: inherit;

   @media (min-width: 48rem) {
    font-size: 2.3rem;
  }

`;
export const HeroText = styled.p`
  font-size: 1.03rem;
  color: var(--clr-white);
  font-family: inherit;
`;

export const HeroLink = styled(ReachRouterLink)`
  padding: 0.5rem 2rem;
  font-size: 0.95rem;
  font-family: inherit;

  cursor: pointer;
  color: var(--clr-black);
  background-color: var(--clr-white);
  border: none;
  border-radius: 0.2rem;
  transition: background 250ms ease, color 200ms ease;
  &:hover {
    background: var(--clr-primary);
    color: var(--clr-white);
  }
`;
