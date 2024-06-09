import React from 'react';
import {
  Main,
  LoginContainer,
  LogoContainer,
  Block,
  InputContainer,
  Wrapper,
  InputBox,
  LoginButton,
} from './LoginStyle';

export const Login = () => {
  return (
    <Main>
      <LoginContainer>
        <Logo />
        <Inputs />
      </LoginContainer>
    </Main>
  );
};

const Logo = () => {
  return (
    <LogoContainer>
      <Block width={30} heigh={30} rotate={0} x={30} y={35} />
      <Block width={30} heigh={30} rotate={0} x={30} y={75} />
      <Block width={40} heigh={40} rotate={45} x={80} y={50} />
      <p className="absolute left-36 top-7 text-4xl font-bold text-purple  ">
        Heungkuk
      </p>
      <p className="absolute left-36 top-16 text-sm text-purple font-extrabold">
        관리자 페이지
      </p>
    </LogoContainer>
  );
};

const Inputs = () => {
  return (
    <InputContainer>
      <Input target={'아이디'} />
      <Input target={'비밀번호'} />
      <LoginButton>로그인</LoginButton>
    </InputContainer>
  );
};

const Input = ({ target }: { target: String }) => {
  return (
    <Wrapper>
      <p className="absolute left-10 top-0 bg-[#f5f5f5] px-2 font-bold text-purple text-sm">
        {target}
      </p>
      <InputBox type={target === '비밀번호' ? 'password' : 'text'} />
    </Wrapper>
  );
};
