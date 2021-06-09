import styled from "styled-components/macro";

export const Container = styled.div`
  display: block;
  max-width: 78ch;
  width: 100%;
  min-width: 280px;
  background-color: rgba(17, 17, 17, 1);
  overflow: hidden;
  padding: 1rem;

  @media (min-width: 35.75rem) {
    padding: 1.3rem;
  }
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 35.75rem) {
    flex-direction: row;
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const Group = styled.div`
  width: 100%;
  @media (min-width: 35.75rem) {
    flex-basis: 60%;
    width: 90%;
    padding: 0 1rem 1rem;
  }
  @media (min-width: 48rem) {
    flex-basis: 70%;
  }
`;

export const Title = styled.h2`
  color: var(--clr-white);
  font-family: inherit;
  font-size: 1.7rem;
  margin-bottom: 0.6rem;

  line-height: 1;

  @media (min-width: 35.75rem) {
    font-size: 2rem;
  }
`;

export const MediumTitle = styled.h3`
  color: var(--clr-white);
  font-family: inherit;
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  line-height: 1;

  @media (min-width: 35.75rem) {
    font-size: 1.4rem;
  }
`;
export const Text = styled.p`
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--clr-gray-300);

  margin-bottom: 0;

  @media (min-width: 35.75rem) {
    font-size: 1rem;
  }
`;
export const Image = styled.img`
  max-width: 13rem;
  height: auto;
  margin-right: auto;
  margin-bottom: 0.8rem;
  width: 100%;

  @media (min-width: 35.75rem) {
    width: 10.5rem;
    margin: 0;
  }
`;
export const GenreList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const GenreGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const GenreItem = styled.div`
  display: inline;
  font-size: 0.9rem;
  font-family: inherit;
  color: var(--clr-gray-300);
  padding: 0 0.3rem;
`;

export const SmallText = styled.p`
  font-size: 0.9rem;
  font-family: inherit;
  color: var(--clr-gray-300);
  margin-bottom: 0;
  line-height: 1.15;
`;

export const ReleaseDate = styled(SmallText)`
  margin-bottom: 0.5rem;
`;
export const RunTime = styled(SmallText)`
  margin-bottom: 0.5rem;
`;
export const Link = styled.a`
  display: inline-block;
  padding: 0.3rem 0.8rem;

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
export const Span = styled.span`
  display: inline;
  padding-right: 0.3rem;
  margin-bottom: 0;

  font-size: 1rem;
  font-family: inherit;
  font-weight: 700;
  color: var(--clr-white);
`;

export const Hr = styled.hr`
  box-sizing: content-box;
  border: 0;
  border-top: 1px solid var(--clr-gray-500);
  height: 1px;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;

  @media (min-width: 35.75rem) {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
`;
