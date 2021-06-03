import { Suspense } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Header, ItemCard } from "../components";
import * as PATH from "../constants/path";
import * as ROUTES from "../constants/routes";

export default function ItemContainer({ data, children, ...restProps }) {
  return (
    <SkeletonTheme color="#222" highlightColor="#444">
      <Header>
        <Header.Nav>
          <Header.Logo to={ROUTES.HOME}>Movie App</Header.Logo>
        </Header.Nav>
        <Suspense fallback={<Skeleton width={300} height={300} count={1} />}>
          <ItemCard {...restProps}>
            <ItemCard.Image
              src={`${PATH.BASE_POSTER_PATH}${data.poster_path}`}
              alt={data.original_title || data.name}
            />
            <ItemCard.Title>{data.orignal_title || data.name}</ItemCard.Title>
          </ItemCard>
        </Suspense>
      </Header>
    </SkeletonTheme>
  );
}
