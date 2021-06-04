import React, { useState, useEffect, useRef } from "react";
import { Header, Card, Player } from "../components";
import Fuse from "fuse.js";
import LoadingContainer from "../containers/loading";

import * as PATH from "../constants/path";
import * as ROUTES from "../constants/routes";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("tvShows");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const search = useRef({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  search.current = () => {
    const fuse = new Fuse(slideRows, {
      keys: [
        "data.results.overview",
        "data.results.original_title",
        "data.results.name",
      ],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  };

  useEffect(() => {
    search.current();
  }, [searchTerm]);

  return (
    <>
      {loading && <LoadingContainer />}
      {!loading && (
        <>
          <Header src="joker" height="45rem">
            <Header.Nav>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME}>Movie App</Header.Logo>
                <Header.TextLink
                  to="/movies"
                  active={category === "movies" ? true : false}
                  onClick={() => setCategory("movies")}
                >
                  Movies
                </Header.TextLink>
                <Header.TextLink
                  to="/tv-shows"
                  active={category === "tvShows" ? true : false}
                  onClick={() => setCategory("tvShows")}
                >
                  TV Shows
                </Header.TextLink>
              </Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </Header.Nav>
            <Header.Hero src="joker">
              <Header.HeroTitle>View Joker Now</Header.HeroTitle>

              <Header.HeroText>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Header.HeroText>
              <Header.HeroLink to="/browse/movie/475557">
                View Details
              </Header.HeroLink>
            </Header.Hero>
          </Header>
          <Card.Group>
            {slideRows.map((slideItem) => (
              <Card key={slideItem.title} category={slideItem.category}>
                <div className="container-fluid">
                  <Card.Title>{slideItem.title}</Card.Title>

                  <Card.Entities>
                    {slideItem !== undefined &&
                      slideItem?.data[0]?.results?.map((item) => (
                        <Card.Item
                          key={item.id}
                          item={item}
                          title={item.original_title || item.name}
                        >
                          <Card.Image
                            src={`${PATH.BASE_POSTER_PATH}${
                              item.backdrop_path || item.poster_path
                            }`}
                          />

                          <Card.Meta>
                            <Card.SubTitle>
                              {item.original_title || item.name}
                            </Card.SubTitle>
                            <Card.Text>{item.overview}</Card.Text>
                          </Card.Meta>
                        </Card.Item>
                      ))}
                  </Card.Entities>
                  <Card.Feature>
                    <Player>
                      <Player.Video></Player.Video>
                      <Player.Button bg="primary" color="white">
                        Watch Trailer
                      </Player.Button>
                    </Player>
                  </Card.Feature>
                </div>
              </Card>
            ))}
          </Card.Group>
        </>
      )}
    </>
  );
}
