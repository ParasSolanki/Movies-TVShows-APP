import Skeleton from "react-loading-skeleton";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import {
  Container,
  Head,
  Body,
  Group,
  Title,
  MediumTitle,
  Text,
  Image,
  SmallText,
  Hr,
  GenreItem,
  GenreList,
  Span,
  ReleaseDate,
  RunTime,
} from "./styles/itemCard";
import { formatDate, getTime } from "../../services/functions";
import Button from "../Button";

export default function ItemCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ItemCard.Head = function ItemCardHead({ children, ...restProps }) {
  return (
    <>
      <Head {...restProps}>{children}</Head>
      <Hr />
    </>
  );
};

ItemCard.Group = function ItemCardGroup({
  data,
  isLoaded,
  children,
  ...restProps
}) {
  const starValue = data?.vote_average / 2;
  return (
    <Group {...restProps}>
      {isLoaded ? (
        <>
          <Title>{data.original_title || data.name}</Title>
          <ReleaseDate>
            <Span>Release date:</Span>
            {formatDate(data.first_air_date || data.release_date)}
          </ReleaseDate>
          {data.runtime && (
            <RunTime>
              <Span>Runtime:</Span>
              {getTime(data.runtime)}
            </RunTime>
          )}
          <ReactStars
            count={5}
            isHalf={true}
            value={starValue}
            edit={false}
            emptyIcon={<FaStar />}
            halfIcon={<FaStarHalfAlt />}
            fullIcon={<FaStarHalf />}
            activeColor="#ffd700"
            {...restProps}
          />
        </>
      ) : (
        <>
          <h2>
            <Skeleton height={34} count={1} />
          </h2>
          <Skeleton height={150} count={1} />
        </>
      )}
    </Group>
  );
};

ItemCard.Body = function ItemCardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

ItemCard.Text = function ItemCardText({ isLoaded, children, ...restProps }) {
  return isLoaded ? (
    <>
      <MediumTitle>StoryLine</MediumTitle>
      <Text {...restProps}>{children}</Text>
      <Hr {...restProps} />
    </>
  ) : (
    <>
      <Skeleton
        width={180}
        height={28}
        count={1}
        style={{ marginBottom: "1rem" }}
      />
      <p style={{ width: "100%" }}>
        <Skeleton variant="text" count={4} height={8} />
      </p>
    </>
  );
};

ItemCard.Image = function ItemCardImage({ isLoaded, ...restProps }) {
  return isLoaded ? (
    <Image {...restProps} />
  ) : (
    <Skeleton width={144} height={208} count={1} style={{}} />
  );
};

ItemCard.GenreList = function ItemCardGenreList({
  isLoaded,
  children,
  ...restProps
}) {
  return isLoaded ? (
    <>
      <GenreList {...restProps}>
        <Span>Genres:</Span>
        {children}
      </GenreList>
      <Hr />
    </>
  ) : (
    <p>
      <Skeleton
        width={60}
        height={15}
        count={1}
        style={{ marginRight: ".8rem" }}
      />

      <Skeleton
        width={45}
        height={15}
        count={3}
        style={{ margin: "0 .8rem" }}
      />
    </p>
  );
};

ItemCard.GenreItem = function ItemCardGenreItem({ children, ...restProps }) {
  return <GenreItem {...restProps}>{children}</GenreItem>;
};

ItemCard.TagLine = function ItemCardTagLine({
  isLoaded,
  children,
  ...restProps
}) {
  return isLoaded ? (
    <>
      <SmallText {...restProps}>
        <Span>Tagline: </Span>
        {children}
      </SmallText>
      <Hr {...restProps} />
    </>
  ) : (
    <p>
      <Skeleton height={15} count={1} />
    </p>
  );
};

ItemCard.Button = function ItemCardButton({
  isLoaded,
  children,
  ...restProps
}) {
  return isLoaded ? (
    <Button padding=".3rem .8rem" target="_blank" {...restProps}>
      {children}
    </Button>
  ) : (
    <Skeleton
      width={150}
      height={40}
      count={1}
      style={{ marginRight: ".8rem", marginBottom: ".3rem" }}
    />
  );
};
