import { Form } from "../components";
import HeaderContainer from "../containers/header";

export default function SignUp() {
  return (
    <>
      <HeaderContainer>
        <Form method="POST">
          <Form.Title>Sign Up</Form.Title>
          <Form.Control>
            <Form.Input type="email" placeholder="Enter your email" />
          </Form.Control>
          <Form.Control>
            <Form.Input type="password" placeholder="Enter your password" />
          </Form.Control>
          <Form.Submit value="Sign Up" type="submit" />
        </Form>
      </HeaderContainer>
    </>
  );
}
