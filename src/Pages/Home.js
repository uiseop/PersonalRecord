import { styled } from "styled-components";
import ContentTitle from "../Components/ContentTitle";
import Cards from "../Components/Cards";
import { Suspense } from "react";

const Home = () => {
  const title = "Great People";

  return (
    <Wrapper>
      <ContentTitle title={title} />
      <Suspense fallback={<div>...loading</div>}>
        <Cards />
      </Suspense>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 20px;
`;