import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import useTVDetail from "../hooks/use-tv-detail";
import dataFilter from "../utils/data-filter";
import { Header } from "../components";

export default function SingleTV() {
  const { name } = useParams();
  const { details } = useTVDetail(name);
  const { data } = dataFilter({ details }, name);

  return (
    <SkeletonTheme color="#222" highlightColor="#444">
      <Header>
        <Header.Nav>
          <Header.Logo>Movie App</Header.Logo>
        </Header.Nav>
        {data !== undefined ? (
          <pre>{JSON.stringify(data[0], null, 2)}</pre>
        ) : (
          <Skeleton width={300} height={400} count={1} />
        )}
      </Header>
    </SkeletonTheme>
  );
}
