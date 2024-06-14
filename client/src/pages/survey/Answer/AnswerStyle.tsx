import { styled } from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://academy.heungkuklife.co.kr/images/main/img_visual.jpg');
  background-size: cover; /* 이미지를 컨테이너 크기에 맞춥니다. */
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomePage = styled.div`
  width: 90%;
  height: 80%;

  max-width: 1000px;

  background-color: #f5f5f5;

  display: flex;

  align-items: center;
  flex-direction: column;

  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  position: relative;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  margin-block: 20px;
`;

// 진행률표
export const ProcessContainer = styled.div`
  width: 80%;
  height: 10px;

  margin-block: 6px;
  z-index: 2;

  display: flex;
`;
export const Box = styled.div<{ percent: boolean }>`
  background-color: red;
  opacity: ${(props) => (props.percent ? 1 : 0.5)};
  z-index: 1;
  flex: 1;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 10px;

  background-color: #351b6f;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const PrevButton = styled.div`
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  position: absolute;
  bottom: 30px;
  left: 30px;
  border-radius: 10px;

  background-color: #351b6f;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

// 질문

export const AnswerContainer = styled.div`
  width: 90%;
  height: 80%;

  overflow: scroll;

  max-width: 1000px;

  background-color: #f5f5f5;

  display: flex;

  align-items: center;
  flex-direction: column;

  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  position: relative;
`;

export const Question = styled.div`
  width: 90%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 23px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AnswerWrapper = styled.div`
  width: 90%;
  height: 70%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* background-color: purple; */
`;

export const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

// {
//   desktop: 1200,
//   tablet:768,
//   phone:600
// }
