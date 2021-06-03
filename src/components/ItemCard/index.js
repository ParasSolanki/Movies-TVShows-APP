import React from "react";
import { Container, Title, Text, Image, SmallText } from "./styles/itemCard";

export default function ItemCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
ItemCard.Title = function ItemCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
ItemCard.Text = function ItemCardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
ItemCard.Image = function ItemCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
ItemCard.Date = function ItemCardDate({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};
