import { Container } from "./styles/Button";

export default function Button({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
