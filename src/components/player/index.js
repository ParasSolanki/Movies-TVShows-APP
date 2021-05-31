import { useState, createContext, useContext } from "react";
import { Container, Overlay, Inner, Button, Close } from "./styles/Player";
import ReactDOM from "react-dom";
import { FeatureContext } from "../../context/featureContext";

import usePlayer from "../../hooks/use-player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const { itemFeature, category } = useContext(FeatureContext);
  const src = usePlayer(itemFeature.id, category);

  return (
    <PlayerContext.Provider value={{ src, showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer, src } = useContext(PlayerContext);
  const srcKey = src?.results?.filter((item) => item.type === "Trailer");
  console.log(srcKey);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          onClick={() => {
            setShowPlayer(false);
          }}
        >
          <Inner>
            <iframe
              title="Youtube Video"
              width="420"
              height="500"
              src={`https://www.youtube.com/embed/tgbNymZ7vqY`}
            ></iframe>
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
