import { useRef } from "react";
import { styled } from "styled-components";
import Select from "./Select";
import options from "../data/options";
import { useForm } from "react-hook-form";

const FormContainer = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const nicknameInput = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const nameRegister = register("name", {
    required: "이름은 필수 입력입니다.",
    pattern: {
      value: /^[가-힣ㄱ-ㅎ]{2,4}$/,
      message: "2~4 글자의 한글만 입력이 가능합니다.",
    },
  });

  const emailRegister = register("email", {
    required: "이메일은 필수 입력입니다.",
    pattern: {
      value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
      message:
        "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.",
    },
  });

  const nicknameRegister = register("nickname", {
    required: "닉네임은 필수 입력입니다.",
    pattern: {
      value: /^[a-zA-Z]{3,10}$/,
      message: "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.",
      minLength: 3,
      maxLength: 10,
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormElem>
        <Label htmlFor="name">
          이름
          <Required>(필수*)</Required>
        </Label>
        <Input id="name" placeholder="이름" ref={nameInput} {...nameRegister} />
        {errors.name && <p>{errors.name.message}</p>}
      </FormElem>
      <FormElem>
        <Label htmlFor="email">
          이메일
          <Required>(필수*)</Required>
        </Label>
        <Input
          id="email"
          placeholder="이메일"
          ref={emailInput}
          {...emailRegister}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </FormElem>
      <FormElem>
        <Label htmlFor="nickName">
          닉네임
          <Required>(필수*)</Required>
        </Label>
        <Input
          id="nickname"
          name="nickname"
          placeholder="닉네임"
          ref={nicknameInput}
          {...nicknameRegister}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}
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
        <Button disabled={isSubmitting} type="submit">
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
