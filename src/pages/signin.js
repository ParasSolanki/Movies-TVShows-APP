import HeaderContainer from "../containers/header";
import { Form } from "../components";

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <Form method="POST">
          <Form.Title>Sign In</Form.Title>
          <Form.Control>
            <Form.Input type="email" placeholder="johndoe@gmail.com" required />
          </Form.Control>
          <Form.Control>
            <Form.Input type="password" placeholder="••••••••" required />
          </Form.Control>
          <Form.Submit value="Sign In" type="submit" />
        </Form>
      </HeaderContainer>
    </>
  );
}
