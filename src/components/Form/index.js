import { Container, Control, Title, Input, Submit } from "./styles/Form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Control = function FormControl({ children, ...restProps }) {
  return <Control {...restProps}>{children}</Control>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ ...restProps }) {
  return <Submit {...restProps} />;
};
