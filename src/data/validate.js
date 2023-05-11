const NAME_VALIDATE = /^[가-힣ㄱ-ㅎ]{2,4}$/;
const EMAIL_VALIDATE = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const NICKNAME_VALIDATE = /^[a-zA-Z]{3,10}$/;

const NAME_MESSAGE = "2~4 글자의 한글만 입력이 가능합니다.";
const EMAIL_MESSAGE =
  "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.";
const NICKNAME_MESSAGE =
  "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.";

const validate = ({ name, email, nickname }) => {
  const errors = {};

  if (name && !NAME_VALIDATE.test(name)) {
    errors.name = NAME_MESSAGE;
  }

  if (email && !EMAIL_VALIDATE.test(email)) {
    errors.email = EMAIL_MESSAGE;
  }

  if (nickname && !NICKNAME_VALIDATE.test(nickname)) {
    errors.nickname = NICKNAME_MESSAGE;
  }

  return errors;
};

export default validate;
