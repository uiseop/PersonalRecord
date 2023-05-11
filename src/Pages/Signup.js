import { styled } from "styled-components";
import ContentTitle from "../Components/ContentTitle";
import FormContainer from "../Components/FormContainer";

const Signup = () => {
  const title = "Sign Up! GreatPeople!";

  return (
    <Wrapper>
      <ContentTitle title={title} />
      <FormContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default Signup;
