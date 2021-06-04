import { useState, createContext, useContext } from "react";
import { Container, Overlay, Inner, Button, Close } from "./styles/Player";
import ReactDOM from "react-dom";
import { FeatureContext } from "../../context/featureContext";

import usePlayer from "../../hooks/use-player";
import playerFilter from "../../utils/player-filter";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const { itemFeature, category } = useContext(FeatureContext);
  const { results } = usePlayer(itemFeature.id, category);
  const src = playerFilter({ results });

  return (
    <PlayerContext.Provider value={{ src, showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer, src } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          onClick={() => {
            setShowPlayer(false);
          }}
        >
          <Inner>
            {src !== undefined ? (
              <iframe
                title="Youtube Video"
                width="420"
                height="500"
                src={`https://www.youtube.com/embed/${src[0]?.key}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : null}

            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      {...restProps}
      onClick={() => {
        setShowPlayer(!showPlayer);
      }}
    >
      {children}
    </Button>
  );
};
