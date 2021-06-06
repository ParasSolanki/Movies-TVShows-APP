import { useState, useContext } from "react";
import { FeatureContext } from "../../context/featureContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Container,
  Group,
  Title,
  Entities,
  Item,
  Meta,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureSubTitle,
  FeatureRow,
  FeatureColumn,
  FeatureImage,
  FeatureClose,
  FeatureLink,
  FeatureDate,
} from "./styles/Card";
import * as PATH from "../../constants/path";
import { formatDate, truncate } from "../../services/functions";

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

Card.Item = function CardItem({ title, item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      title={title}
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

Card.Image = function CardImage({ src, ...restProps }) {
  return (
    <LazyLoadImage
      className="card-img"
      src={src}
      {...restProps}
      effect="blur"
    />
  );
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
  const { showFeature, setShowFeature, itemFeature, category } =
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

          <FeatureLink
            to={
              category === "movies"
                ? `browse/movie/${itemFeature.id}`
                : `browse/tv/${itemFeature.id}`
            }
          >
            View Details
          </FeatureLink>
          {children}
        </FeatureColumn>
        <FeatureColumn>
          <FeatureImage
            src={`${PATH.BASE_POSTER_PATH}${
              itemFeature.backdrop_path || itemFeature.poster_path
            }`}
          />
        </FeatureColumn>
      </FeatureRow>
    </Feature>
  ) : null;
};
