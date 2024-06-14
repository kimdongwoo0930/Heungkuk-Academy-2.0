import React, { useState } from 'react';
import {
  AnswerBox,
  AnswerContainer,
  AnswerWrapper,
  Box,
  Button,
  Main,
  PrevButton,
  ProcessContainer,
  Question,
  Title,
  WelcomePage,
} from './AnswerStyle';

import { questions, QuestionType } from '../../../data/Survey';

const percent = [
  '0%',
  '10%',
  '20%',
  '30%',
  '40%',
  '50%',
  '60%',
  '70%',
  '80%',
  '90%',
  '100%',
];

export const Answer = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <Main>
      {page === 0 && <FirstPage setpage={setPage} />}
      {page !== 0 && <AnswerPage page={page} setpage={setPage} />}
    </Main>
  );
};

const FirstPage = ({ setpage }: { setpage: any }) => {
  return (
    <WelcomePage>
      {/* <Process /> */}
      <Title>흥국생명연수원 이용 만족도 조사</Title>
      <div className="mt-[25%] w-[90%] flex justify-center items-center flex-col gap-5 text-xm text-center px-6">
        <div>
          저희 흥국 생명 연수원을 찾아주신 @name@ 고객님께 감사드립니다.
        </div>
        <div>
          고객님께 보다 나은 서비스를 제공해드리기 위해 이용 만족도 조사를
          실시하고자 합니다.
        </div>
        <div>
          고객님의 소중한 의견을 통해 더욱 발전하는 흥국생명연수원이 되도록
          하겠습니다.
        </div>
      </div>
      <Button onClick={() => setpage(1)}>시작</Button>
    </WelcomePage>
  );
};

const Process = ({ page }: { page: number }) => {
  return (
    <div className="w-[90%] flex justify-center ">
      <ProcessContainer>
        {percent.map((percent, index) => {
          return <Box percent={index < page ? true : false}></Box>;
        })}
      </ProcessContainer>
      <p className="ml-8">{percent[page - 1]}</p>
    </div>
  );
};

const AnswerPage = ({ page, setpage }: { page: number; setpage: any }) => {
  const data = questions[page];

  return (
    <AnswerContainer>
      <Question>{data.question}</Question>
      <Process page={page} />
      {page !== 11 ? (
        <AnswerWrapper>
          {data.answer.map((item) => {
            return (
              <AnswerBox>
                <input type="checkbox" className="w-[20px] h-[20px]" />
                {item}
              </AnswerBox>
            );
          })}
        </AnswerWrapper>
      ) : (
        <input
          type={'text'}
          className="w-[80%] h-[50%] mt-10 bg-blend-lighten border-2 pl-4"
          placeholder="답변을 적어주세요"
        />
      )}
      {page < 11 && <Button onClick={() => setpage(page + 1)}>다음</Button>}
      {page === 11 && <Button onClick={() => {}}>제출</Button>}
      <PrevButton onClick={() => setpage(page - 1)}>뒤로</PrevButton>
    </AnswerContainer>
  );
};
