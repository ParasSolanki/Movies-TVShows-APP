import React from "react";
import { Header, Button } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children, ...restProps }) {
  return (
    <Header src="home-bg" {...restProps}>
      <Header.Nav>
        <Header.Logo to={ROUTES.HOME}>Movie App</Header.Logo>
        <div>
          <Button
            to={ROUTES.SIGN_IN}
            bg="primary"
            color="white"
            padding=".2rem .9rem"
          >
            Sign in
          </Button>
          <Button
            to={ROUTES.SIGN_UP}
            bg="white"
            color="primary"
            padding=".2rem .9rem"
          >
            Sign up
          </Button>
        </div>
      </Header.Nav>
      {children}
    </Header>
  );
}
