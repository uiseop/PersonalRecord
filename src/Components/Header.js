import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
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

const StyledLink = styled(Link)`
  margin: 0px 15px;
  text-decoration: none;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={"/web"}>
        <div className="header header_left">
          <span className="menu_name" id="menu_home">
            HOME
          </span>
        </div>
      </StyledLink>
      <StyledLink to={"/web/signup"}>
        <div className="header header_right">
          <span className="menu_name" id="menu_signup">
            SIGNUP
          </span>
        </div>
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
