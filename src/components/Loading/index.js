import { Container, Loader, LoaderInner } from "./styles/loading";

export default function Loading({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Loading.Loader = function LoadingLoader({ children, ...restProps }) {
  return <Loader {...restProps}>{children}</Loader>;
};

Loading.LoaderInner = function LoadingLoaderInner({ children, ...restProps }) {
  return <LoaderInner {...restProps}>{children}</LoaderInner>;
};
