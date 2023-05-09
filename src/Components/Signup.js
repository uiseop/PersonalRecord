import { styled } from "styled-components";
import ContentTitle from "./ContentTitle";

const Signup = () => {
  const title = "Sign Up! GreatPeople!";

  return (
    <Wrapper>
      <ContentTitle title={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default Signup;
