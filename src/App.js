/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Components/Header";

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

function App() {
  return <Header />;
}

export default App;
