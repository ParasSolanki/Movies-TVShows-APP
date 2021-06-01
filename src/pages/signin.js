import HeaderContainer from "../containers/header";
import { Form } from "../components";

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <Form method="POST">
          <Form.Title>Sign In</Form.Title>
          <Form.Control>
            <Form.Input type="email" placeholder="Enter your email" />
          </Form.Control>
          <Form.Control>
            <Form.Input type="password" placeholder="Enter your password" />
          </Form.Control>
          <Form.Submit value="Sign In" type="submit" />
        </Form>
      </HeaderContainer>
    </>
  );
}
