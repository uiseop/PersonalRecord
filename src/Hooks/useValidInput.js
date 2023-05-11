import { useEffect, useState } from "react";

const useValidInput = (validation) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  const onChange = ({ target }) => {
    const { value } = target;
    setInput(value);
  };

  const checkValid = (info) => {
    if (validation.test(info)) return setIsValid(true);
    return setIsValid(false);
  };

  useEffect(() => {
    if (input) {
      checkValid(input);
    }
  }, [input]);

  return [input, isValid, onChange];
};

export default useValidInput;
