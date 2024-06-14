import React, { useState } from 'react';
import { weeks } from '../../../assets/rooms';
import { DateInfo, getDaysInMonth } from '../../../utils/Rooms';
import {
  BodyContainer,
  Box,
  ButtonContainer,
  ChangeBtn,
  Container,
  Count,
  CurrentMonth,
  Day,
  DayContainer,
  Days,
  HeadContainer,
  Main,
  Organization,
  Title,
  Week,
  WeekContainer,
} from './RoomStyle';

// 임시 데이터
import { exampleData } from '../../../data/ClassRoom';
import { ResponseType } from '../../../api/ClassRoomresponseType';
import { makeDateFormat } from '../../../utils/GetDate';

// 달력모양으로 제작하자
export const Room = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  return (
    <Main>
      <Container>
        <SchedulerHead
          selectedDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <SchedulerBody
          days={daysInMonth}
          Data={exampleData}
          currentDate={currentDate}
        />
      </Container>
    </Main>
  );
};

const SchedulerHead = ({
  selectedDate,
  setCurrentDate,
}: {
  selectedDate: Date;
  setCurrentDate: any;
}) => {
  const onClickPrev = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };
  const onClickNext = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <HeadContainer>
      <Title>6월 예약 현황</Title>
      <ButtonContainer>
        <ChangeBtn onClick={() => onClickPrev()}>&lt;</ChangeBtn>
        <CurrentMonth>{`${selectedDate.getFullYear()}년 ${
          selectedDate.getMonth() + 1
        }월`}</CurrentMonth>
        <ChangeBtn onClick={() => onClickNext()}>&gt;</ChangeBtn>
      </ButtonContainer>
    </HeadContainer>
  );
};

/**
 *
 * 달력부분
 */

const SchedulerBody = ({
  days,
  Data,
  currentDate,
}: {
  days: (DateInfo | null)[];
  Data: ResponseType;
  currentDate: Date;
}) => {
  console.log(Data);

  return (
    <BodyContainer>
      <WeekContainer>
        {weeks.map((week) => {
          return <Week week={week}>{week}</Week>;
        })}
      </WeekContainer>
      <DayContainer>
        {days.map((day, index) => {
          return (
            <Days>
              {day ? (
                <>
                  <Day
                    week={index % 7 === 0 ? '일' : index % 7 === 6 ? '토' : ''}
                  >
                    {day.date}
                  </Day>
                  {Object.keys(Data).map((id) => {
                    const rooms = Data[id].room;
                    const Date = makeDateFormat(currentDate, day.date);

                    if (rooms.hasOwnProperty(Date)) {
                      return (
                        <Box>
                          <Count>{`${rooms[Date].length}개`}</Count>
                          <Organization>{Data[id].organization}</Organization>
                        </Box>
                      );
                    }
                  })}
                </>
              ) : (
                //TODO : 이제 데이터를 가쟈와서 날짜 보고 그날 몇개의 방인지 표시
                <Day />
              )}
            </Days>
          );
        })}
      </DayContainer>
    </BodyContainer>
  );
};
