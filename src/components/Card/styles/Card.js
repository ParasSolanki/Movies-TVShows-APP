import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Group = styled.div`
  position: relative;
  width: 100%;

  top: -5rem;
`;

export const Title = styled.h2`
  font-family: inherit;
  font-size: 1.32rem;
  color: var(--clr-white);
  margin-bottom: 0.6rem;

  @media (min-width: 48rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 62rem) {
    font-size: 1.6rem;
  }
`;

export const Entities = styled.div`
  width: 100%;
  height: 9rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-direction: horizontal;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 2rem;

  @media (min-width: 35.75rem) {
    height: 10rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const Meta = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  visibility: hidden;
  width: 100%;
  height: 6rem;
  padding: 0.6rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.97),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4)
  );

  transition: visibility 0.3s ease;
`;
export const Item = styled.div`
  position: relative;
  width: 13rem;
  height: 9rem;
  cursor: pointer;

  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 35.75rem) {
    width: 15.5rem;
    height: 10rem;
  }

  @media (min-width: 48rem) {
    width: 17rem;
  }

  &:not(:last-child) {
    margin-right: 0.4rem;
  }

  &:hover {
    ${Meta} {
      visibility: visible;
    }
  }
`;

export const SubTitle = styled.h3`
  color: var(--clr-white);

  font-family: inherit;
  font-size: 0.97rem;

  line-height: 1.3;

  margin-bottom: 0.4rem;

  @media (min-width: 48rem) {
    font-size: 1rem;
  }
  @media (min-width: 62rem) {
    font-size: 1.1rem;
  }
`;
export const Text = styled.p`
  color: var(--clr-white);
  font-size: 0.7rem;
  line-height: 1;

  font-family: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 62rem) {
    font-size: 0.8rem;
  }
`;

export const Feature = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const FeatureColumn = styled.div`
  flex: 0 0 100%;

  &:first-child {
    margin-bottom: 0.8rem;
  }

  @media (min-width: 48rem) {
    flex: 0 0 50%;
  }
`;

export const FeatureRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  position: relative;

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`;

export const FeatureTitle = styled.h3`
  color: var(--clr-white);
  font-family: inherit;
  font-size: 1.56rem;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (min-width: 48rem) {
    font-size: 1.8rem;
  }
`;

export const FeatureSubTitle = styled.p`
  color: var(--clr-white);
  font-family: inherit;
  font-size: 0.94rem;

  @media (min-width: 48rem) {
    font-size: 1rem;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 17rem;
  object-fit: cover;
  background-image: linear-gradient(
    to right,
    rgba(17, 17, 17, 0.9),
    rgba(17, 17, 17, 0.7)
  );
`;

export const FeatureClose = styled.div`
  width: 1.3rem;
  height: 1.3rem;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  font-weight: bold;

  cursor: pointer;

  background: var(--clr-white);
  color: var(--clr-black);

  border-radius: 50%;

  box-shadow: 0 0 5px 3px var(--clr-black);

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 48rem) {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const FeatureLink = styled(Link)`
  display: inline-block;
  padding: 0.3rem 1rem;

  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  background-color: var(--clr-white);
  color: var(--clr-black);

  margin-bottom: 1rem;
  margin-right: 0.8rem;

  border: none;
  border-radius: 0.2rem;

  transition: background-color 200ms ease, color 150ms ease;

  &:hover {
    background-color: var(--clr-primary);
    color: var(--clr-white);
  }
`;

export const FeatureDate = styled.p`
  font-family: inherit;
  font-size: 0.98rem;
  color: var(--clr-white);
`;
