import { styled } from "styled-components";

const ContentTitle = ({title}) => {

  return (
    <TitleWrapper>
      <h1>{title}</h1>
    </TitleWrapper>
  );
};

export default ContentTitle;

const TitleWrapper = styled.div`
  text-align: center;
`;
