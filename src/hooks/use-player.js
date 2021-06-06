import { useState, useEffect } from "react";
import fetchPlayerSrc from "../services/fetch-player-src";

export default function usePlayer(id, category) {
  const [playerSrc, setPlayerSrc] = useState([]);
  useEffect(() => {
    async function getPlayerSrc() {
      const result = await fetchPlayerSrc(id, category);
      setPlayerSrc(result);
    }

    getPlayerSrc();
  }, [id, category]);
  console.log(playerSrc);
  return playerSrc;
}
