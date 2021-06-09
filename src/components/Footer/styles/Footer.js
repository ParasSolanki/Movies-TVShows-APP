import styled from "styled-components/macro";

export const Container = styled.footer`
  width: 100%;
`;
export const Frame = styled.div`
  max-width: 16rem;
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem 0 1.5rem;
`;

export const Text = styled.p`
  display: block;
  margin: 0.8rem auto;
  color: red;
  font-family: inherit;
  font-size: 0.98rem;
  color: var(--clr-gray-500);
`;

export const Span = styled.span`
  font-weight: 700;
  color: var(--clr-white);
`;

export const Social = styled.div`
  max-width: 9rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIcon = styled.a`
  font-size: 1.35rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;
