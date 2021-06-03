import { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Nav,
  Group,
  Logo,
  Link,
  Search,
  SearchInput,
  HeroContainer,
  HeroText,
  HeroBackground,
  HeroTitle,
  HeroLink,
} from "./styles/Header";
import { FaSearch } from "react-icons/fa";

export default function Header({ src, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <HeroBackground src={`images/misc/${src}.jpg`}>
        <div className="container">{children}</div>
      </HeroBackground>
    </Container>
  );
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <ReachRouterLink to={to}>{children}</ReachRouterLink>
    </Logo>
  );
};

Header.TextLink = function HeaderTextLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <Search {...restProps}>
      <FaSearch
        onClick={() => setActiveSearch(!activeSearch)}
        fill="white"
        cursor="pointer"
        size="1em"
      />
      {activeSearch && (
        <SearchInput
          type="text"
          placeholder="Search Movie and TV shows"
          required
          value={searchTerm}
          onChange={({ target }) => {
            setSearchTerm(target.value);
          }}
          activeSearch={activeSearch}
        />
      )}
    </Search>
  );
};

Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <HeroContainer {...restProps}>{children}</HeroContainer>;
};

Header.HeroLink = function HeaderHeroLink({ to, children, ...restProps }) {
  return (
    <HeroLink to={to} {...restProps}>
      {children}
    </HeroLink>
  );
};

Header.HeroTitle = function HeaderHeroTitle({ children, ...restProps }) {
  return <HeroTitle {...restProps}>{children}</HeroTitle>;
};

Header.HeroText = function HeaderHeroText({ children, ...restProps }) {
  return <HeroText {...restProps}>{children}</HeroText>;
};
