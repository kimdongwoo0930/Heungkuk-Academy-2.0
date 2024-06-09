import React, { useState } from 'react';
import {
  ButtonContainer,
  ClassContainer,
  Classroom,
  ClassTitle,
  ClassWrapper,
  Container,
  DateBtn,
  DateText,
  Day,
  Days,
  Main,
  ScheduleBar,
  ScheduleContainer,
  TableContainer,
  TableHeader,
  Title,
} from './ClassRoomStyle';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { rooms } from '../../../assets/rooms';
import {
  openBarType,
  TableBodyType,
  TableDateType,
  TableHeadType,
} from '../../../types/schedule/ClassRoomType';
import { getMonthDaysAndWeekdays } from '../../../utils/ClassRoomFC';

export const ClassRoom = () => {
  // 날짜 구하기
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const monthDaysAndWeekdays = getMonthDaysAndWeekdays(year, month);

  return (
    <Main>
      <Container>
        <ButtonContainer>
          <TableDate
            selectedDate={selectedDate}
            setSelectDate={setSelectedDate}
          />
        </ButtonContainer>
        <TableContainer>
          <TableHead
            selectedDate={selectedDate}
            DaysAndWeekdaysList={monthDaysAndWeekdays}
          />
          <TableBody
            selectedDate={selectedDate}
            DaysAndWeekdaysList={monthDaysAndWeekdays}
          />
        </TableContainer>
      </Container>
    </Main>
  );
};
const TableDate = (props: TableDateType) => {
  const onClickPrev = () => {
    const newDate = new Date(props.selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    props.setSelectDate(newDate);
  };
  const onClickNext = () => {
    const newDate = new Date(props.selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    props.setSelectDate(newDate);
  };

  return (
    <>
      <DateBtn>
        <TbPlayerTrackPrev size={25} onClick={onClickPrev} />
      </DateBtn>
      <DateText>{`${props.selectedDate.getFullYear()}. ${
        props.selectedDate.getMonth() + 1
      }`}</DateText>
      <DateBtn>
        <TbPlayerTrackNext size={25} onClick={onClickNext} />
      </DateBtn>
    </>
  );
};

const TableHead = (props: TableHeadType) => {
  return (
    <TableHeader>
      <Title>예약 현황</Title>
      <div
        className="flex w-[100%] h-[100%] flex-col"
        style={{ border: '1px solid #b3bbc0' }}
      >
        {/* 요일 */}
        <Days days={props.DaysAndWeekdaysList.length}>
          {props.DaysAndWeekdaysList.map((n, index) => {
            return <Day>{n.day}</Day>;
          })}
        </Days>
        {/* 날짜 */}
        <Days days={props.DaysAndWeekdaysList.length}>
          {props.DaysAndWeekdaysList.map((n, index) => {
            return <Day>{n.weekday}</Day>;
          })}
        </Days>
      </div>
    </TableHeader>
  );
};

const TableBody = (props: TableBodyType) => {
  const [openBar, setOpenBar] = useState([true, true, true, true, true]);

  const openBarHadler = (index: number): void => {
    setOpenBar((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      {Object.keys(rooms).map((room, index) => {
        return (
          <>
            <ScheduleBar onClick={() => openBarHadler(index)}>
              <p className="font-bold text-sm font-intelone ">{room}</p>

              {openBar[index] ? (
                <IoMdArrowDropup onClick={() => openBarHadler(index)} />
              ) : (
                <IoMdArrowDropdown onClick={() => openBarHadler(index)} />
              )}
            </ScheduleBar>

            {openBar[index] &&
              rooms[room].map((classroom) => {
                return (
                  <ClassContainer>
                    <ClassTitle>{classroom}</ClassTitle>
                    <ClassWrapper days={props.DaysAndWeekdaysList.length}>
                      {props.DaysAndWeekdaysList.map((n, index) => {
                        return <Classroom></Classroom>;
                      })}
                    </ClassWrapper>
                  </ClassContainer>
                );
              })}
          </>
        );
      })}
    </>
  );
};
