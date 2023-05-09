/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerStyle = css`
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 1.5em;
  font-family: "Bebas Neue", cursive;
  background: #29323c;
  background: linear-gradient(
    198deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(99, 116, 136, 1) 0%,
    rgba(41, 50, 60, 1) 100%
  );
  color: white;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Link to={"/web"}>
        <div class="header header_left">
          <span class="menu_name" id="menu_home">
            HOME
          </span>
        </div>
      </Link>
      <Link to={"/web/signup"}>
        <div class="header header_right">
          <span class="menu_name" id="menu_signup">
            SIGNUP
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
