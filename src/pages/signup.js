import { Form } from "../components";
import HeaderContainer from "../containers/header";

export default function SignUp() {
  return (
    <>
      <HeaderContainer>
        <Form method="POST">
          <Form.Title>Sign Up</Form.Title>
          <Form.Control>
            <Form.Input type="email" placeholder="johndoe@gmail.com" required />
          </Form.Control>
          <Form.Control>
            <Form.Input type="password" placeholder="••••••••" required />
          </Form.Control>
          <Form.Submit value="Sign Up" type="submit" />
        </Form>
      </HeaderContainer>
    </>
  );
}
