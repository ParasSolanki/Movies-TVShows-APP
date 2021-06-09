import React from "react";

import {
  Container,
  Frame,
  Social,
  SocialIcon,
  Text,
  Span,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <div className="container-fluid">{children}</div>
    </Container>
  );
}

Footer.Frame = function FooterFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Span = function FooterSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Footer.Social = function FooterSocial({ children, ...restProps }) {
  return <Social {...restProps}>{children}</Social>;
};

Footer.SocialIcon = function FooterSocialIcon({
  href,
  title,
  icon,
  ...restProps
}) {
  return (
    <SocialIcon href={href} title={title} target="_blank" {...restProps}>
      {icon}
    </SocialIcon>
  );
};
