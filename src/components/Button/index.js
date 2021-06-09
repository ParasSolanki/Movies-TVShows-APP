import { Link } from "./styles/Button";

export default function Button({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
}
