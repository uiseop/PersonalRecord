import { styled } from "styled-components";
import ContentTitle from "../Components/ContentTitle";

const Home = () => {
  const title = "Great People";

  return (
    <Wrapper>
      <ContentTitle title={title} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 20px;
`;
