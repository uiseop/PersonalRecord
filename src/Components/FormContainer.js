import { useRef } from "react";
import { styled } from "styled-components";
import Select from "./Select";
import useForms from "../Hooks/useForms";
import validate from "../data/validate";
import options from "../data/options";

const FormContainer = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const nicknameInput = useRef(null);

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForms(
    {
      initialValues: { name: "", email: "", nickname: "" },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
      validate,
    }
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormElem>
        <Label htmlFor="name">
          이름
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={handleChange}
          required
          id="name"
          name="name"
          placeholder="이름"
          ref={nameInput}
          value={values.name}
        />
        {errors.name && <p>{errors.name}</p>}
      </FormElem>
      <FormElem>
        <Label htmlFor="email">
          이메일
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={handleChange}
          required
          id="email"
          name="email"
          placeholder="이메일"
          ref={emailInput}
          value={values.email}
        />
        {errors.email && <p>{errors.email}</p>}
      </FormElem>
      <FormElem>
        <Label htmlFor="nickName">
          닉네임
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={handleChange}
          required
          id="nickname"
          name="nickname"
          placeholder="닉네임"
          ref={nicknameInput}
          value={values.nickname}
        />
        {errors.nickname && <p>{errors.nickname}</p>}
      </FormElem>
      <FormElem>
        <Label htmlFor="role">
          직군
          <Required>(필수*)</Required>
        </Label>
        <Select id="role" name="role" options={options.roleOptions} />
      </FormElem>
      <FormElem>
        <Label htmlFor="mbti">MBTI</Label>
        <Select id="mbti" name="mbti" options={options.mbtiOptions} />
      </FormElem>
      <FormElem>
        <Button disabled={Object.keys(errors).length === 0} type="submit">
          등록
        </Button>
      </FormElem>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
  margin: 30px 0px;
`;

const FormElem = styled.span`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0.75em auto;
`;

const Label = styled.label`
  text-align: left;
  padding: 3px 5px;
  font-size: 0.7em;
  color: #5a5c66;
`;

const Required = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  box-sizing: border-box;
  background: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 1em;
  border: 0;
  border-radius: 1rem;
  box-sizing: border-box;
  background: #dedede;
`;

export default FormContainer;
