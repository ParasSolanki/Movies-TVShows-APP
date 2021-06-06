import { SkeletonTheme } from "react-loading-skeleton";
import { Header, ItemCard, Player } from "../components";
import * as PATH from "../constants/path";
import * as ROUTES from "../constants/routes";

export default function ItemContainer({ data, children, ...restProps }) {
  const isLoaded = data.length !== 0;
  console.log(data);

  return (
    <SkeletonTheme color="#222" highlightColor="#444">
      <Header>
        <Header.Nav>
          <Header.Logo to={ROUTES.HOME}>Movie App</Header.Logo>
        </Header.Nav>
        <ItemCard {...restProps}>
          <ItemCard.Head>
            <ItemCard.Image
              isLoaded={isLoaded}
              src={`${PATH.BASE_POSTER_PATH}${data.poster_path}`}
              alt={data.original_title || data.name}
            />
            <ItemCard.Group data={data} isLoaded={isLoaded}>
              <Player>
                <Player.Video></Player.Video>
                <Player.Button>Play Trailer</Player.Button>
              </Player>
            </ItemCard.Group>
          </ItemCard.Head>
          <ItemCard.Body>
            <ItemCard.Text isLoaded={isLoaded}>{data.overview}</ItemCard.Text>
            <ItemCard.GenreList isLoaded={isLoaded}>
              {isLoaded &&
                data.genres?.map((item) => (
                  <ItemCard.GenreItem key={item.id}>
                    {item.name}
                  </ItemCard.GenreItem>
                ))}
            </ItemCard.GenreList>
            {data.tagline && (
              <ItemCard.TagLine isLoaded={isLoaded}>
                {data.tagline}
              </ItemCard.TagLine>
            )}
            {data.homepage && (
              <ItemCard.Button isLoaded={isLoaded} href={`${data?.homepage}`}>
                View Home Page
              </ItemCard.Button>
            )}
            {data.imdb_id && (
              <ItemCard.Button
                isLoaded={isLoaded}
                href={`https://www.imdb.com/title/${data?.imdb_id}`}
              >
                View On IMDB
              </ItemCard.Button>
            )}
          </ItemCard.Body>
        </ItemCard>
      </Header>
    </SkeletonTheme>
  );
}
