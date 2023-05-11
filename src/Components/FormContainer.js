import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Select from "./Select";
import useValidInput from "../Hooks/useValidInput";

const NAME_VALIDATION = /^[가-힣ㄱ-ㅎ]{2,4}$/;
const EMAIL_VALIDATION = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const NICKNAME_VALIDATION = /^[a-zA-Z]{3,10}$/;

const NAME_MESSAGE = "2~4 글자의 한글만 입력이 가능합니다.";
const EMAIL_MESSAGE =
  "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.";
const NICKNAME_MESSAGE =
  "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.";

const keys = {
  name: { valid: "NAME_VALIDATION", message: "NAME_MESSAGE" },
  email: { valid: "EMAIL_VALIDATION", message: "EMAIL_MESSAGE" },
  nickname: { valid: "NICKNAME_VALIDATION", message: "NICKNAME_MESSAGE" },
};

const valids = {
  NAME_VALIDATION,
  EMAIL_VALIDATION,
  NICKNAME_VALIDATION,
};

const messages = {
  NAME_MESSAGE,
  EMAIL_MESSAGE,
  NICKNAME_MESSAGE,
};

const FormContainer = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const nicknameInput = useRef(null);

  const [name, isNameValid, onNameChange] = useValidInput(NAME_VALIDATION);
  const [email, isEmailValid, onEmailChange] = useValidInput(EMAIL_VALIDATION);
  const [nickName, isNicknameValid, onNicknameChange] =
    useValidInput(NICKNAME_VALIDATION);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const roleOptions = [
    { value: "", name: "직군을 선택해주세요" },
    { value: "backend", name: "백엔드" },
    { value: "frontend", name: "프론트엔드" },
    { value: "fullstack", name: "풀스택" },
  ];

  const mbtiOptions = [
    { value: "", name: "MBTI를 선택해주세요" },
    { value: "backend", name: "백엔드" },
    { value: "frontend", name: "프론트엔드" },
    { value: "fullstack", name: "풀스택" },
  ];

  return (
    <Form onSubmit={onSubmit}>
      <FormElem>
        <Label htmlFor="name">
          이름
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={onNameChange}
          required
          id="name"
          placeholder="이름"
          ref={nameInput}
        />
        {isNameValid === false ? <p>{NAME_MESSAGE}</p> : ""}
      </FormElem>
      <FormElem>
        <Label htmlFor="email">
          이메일
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={onEmailChange}
          required
          id="email"
          placeholder="이메일"
          ref={emailInput}
        />
        {isEmailValid === false ? <p>{EMAIL_MESSAGE}</p> : ""}
      </FormElem>
      <FormElem>
        <Label htmlFor="nickName">
          닉네임
          <Required>(필수*)</Required>
        </Label>
        <Input
          onChange={onNicknameChange}
          required
          id="nickname"
          placeholder="닉네임"
          ref={nicknameInput}
        />
        {isNicknameValid === false ? <p>{NICKNAME_MESSAGE}</p> : ""}
      </FormElem>
      <FormElem>
        <Label htmlFor="role">
          직군
          <Required>(필수*)</Required>
        </Label>
        <Select id="role" name="role" options={roleOptions} />
      </FormElem>
      <FormElem>
        <Label htmlFor="mbti">MBTI</Label>
        <Select id="mbti" name="mbti" options={mbtiOptions} />
      </FormElem>
      <FormElem>
        <Button type="submit">등록</Button>
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
