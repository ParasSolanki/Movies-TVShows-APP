import React from "react";
import { Loading } from "../components";
export default function LoadingContainer() {
  return (
    <Loading>
      <Loading.Loader>
        <Loading.LoaderInner></Loading.LoaderInner>
      </Loading.Loader>
    </Loading>
  );
}
