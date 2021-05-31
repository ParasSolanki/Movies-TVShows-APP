import { useState, useContext } from "react";
import { FeatureContext } from "../../context/featureContext";
import {
  Container,
  Group,
  Title,
  Entities,
  Item,
  Image,
  Meta,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureSubTitle,
  FeatureRow,
  FeatureColumn,
  FeatureImage,
  FeatureBackground,
  FeatureClose,
  FeatureButton,
  FeatureDate,
} from "./styles/Card";
import * as PATH from "../../constants/path";

export default function Card({ category, children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{
        category,
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature,
      }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setShowFeature(true);
        setItemFeature(item);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Feature = function CardFeature({ children, ...restProps }) {
  const { showFeature, setShowFeature, itemFeature } =
    useContext(FeatureContext);
  return showFeature ? (
    <Feature {...restProps}>
      <FeatureRow>
        <FeatureClose
          onClick={() => {
            setShowFeature(false);
          }}
        >
          &times;
        </FeatureClose>
        <FeatureColumn>
          <FeatureTitle>
            {itemFeature.original_title || itemFeature.name}
          </FeatureTitle>
          <FeatureSubTitle>{truncate(itemFeature.overview)}</FeatureSubTitle>
          <FeatureDate>
            {`Released on ${formatDate(
              itemFeature.first_air_date || itemFeature.release_date
            )}`}
          </FeatureDate>

          <FeatureButton bg="white" color="black">
            View Details
          </FeatureButton>
          {children}
        </FeatureColumn>
        <FeatureColumn>
          <FeatureBackground>
            <FeatureImage
              src={`${PATH.BASE_POSTER_PATH}${
                itemFeature.backdrop_path || itemFeature.poster_path
              }`}
            />
          </FeatureBackground>
        </FeatureColumn>
      </FeatureRow>
    </Feature>
  ) : null;
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = new Date(date).toLocaleDateString("en-US", options);
  return formatedDate;
};

const truncate = (overview) => {
  const CHARACTERS_LIMIT = 210;
  return overview.length > CHARACTERS_LIMIT
    ? overview.substring(0, CHARACTERS_LIMIT) + "..."
    : overview;
};
