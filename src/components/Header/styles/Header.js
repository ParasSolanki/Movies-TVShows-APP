import styled from "styled-components/macro";

export const Container = styled.header`
  width: 100%;
  position: relative;
  height: 45rem;

  display: flex;
  flex-direction: column;
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
  font-weight: ${({ active }) => (active === true ? "700" : "normal")};
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
  color: white;
  width: ${({ activeSearch }) => (activeSearch === true ? "12.3rem" : "0")};
  opacity: ${({ activeSearch }) => (activeSearch === true ? "1" : "0")};
  margin-left: ${({ activeSearch }) => (activeSearch === true ? ".3rem" : "0")};
  font-family: inherit;
  border: 1px solid gray;
  border-radius: 0.3rem;
  outline: none;
  transition: width 300ms ease-in-out, opacity 300ms ease;

  &:placeholder {
    font-family: inherit;
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
  height: inherit;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => (src ? src : null)}) top left / cover no-repeat;
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

export const HeroButton = styled.button`
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
