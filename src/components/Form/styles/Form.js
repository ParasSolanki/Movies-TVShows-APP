import styled from "styled-components/macro";

export const Container = styled.form`
  max-width: 23rem;
  width: 100%;

  padding: 1.4rem;
  margin: auto;
  background: rgba(4, 4, 4, 0.8);

  border-radius: 0.4rem;
`;
export const Control = styled.div`
  width: 100%;
  margin-bottom: 0.7rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.6rem;
  font-family: inherit;
  font-size: 0.88rem;
  color: var(--clr-white);
  background: rgba(17, 17, 17, 0.8);
  border: 2px solid rgba(17, 17, 17, 0.8);
  border-radius: 0.3rem;
  outline: none;

  &:focus,
  &:focus-within {
    border: 2px solid var(--clr-primary);
  }
`;
export const Title = styled.h2`
  font-family: inherit;
  font-size: 1.7rem;
  color: var(--clr-white);
`;
export const Submit = styled.input`
  width: 100%;
  padding: 0.5rem 0.6rem;

  cursor: pointer;

  font-size: 1rem;
  font-family: inherit;
  color: var(--clr-black);
  background: var(--clr-white);
  border: none;
  border-radius: 0.3rem;
  transition: background 200ms ease, color 150ms ease;

  &:hover {
    color: var(--clr-white);
    background: var(--clr-primary);
  }
`;
