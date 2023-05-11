import { styled } from "styled-components";

const Select = ({ id, name, options }) => {
  console.log(id, name, options);
  return (
    <StyledSelect id={id} name={name}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 100%;
  padding: 1em;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  box-sizing: border-box;
  background: none;
`;

export default Select;
