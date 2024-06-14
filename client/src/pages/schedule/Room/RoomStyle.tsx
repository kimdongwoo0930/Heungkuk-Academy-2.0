import { styled } from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1000px;

  margin-block: 30px;
`;

export const Container = styled.div`
  width: 80%;
  height: 95%;
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 30px;
`;

export const Title = styled.div`
  width: 130px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;

  color: #3a6ff8;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  height: 25px;

  display: flex;
`;

export const ChangeBtn = styled.div`
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  flex: 0.7;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #b0b0b0;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

export const CurrentMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;

  gap: 0;
  /* border: 1px solid #f0f0f0; */

  /* border-radius: 20px; */
`;

export const WeekContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f4f5ff;

  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const Week = styled.div<{ week?: String }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #3a6ff8;

  color: ${(props) =>
    props.week === '토'
      ? '#481FEB'
      : props.week === '일'
      ? '#FF613E'
      : 'black'};
`;

export const DayContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: repeat(7, 1fr);
`;

export const Days = styled.div`
  width: 100%;
  height: 180px;
  border: 1px solid #f0f0f0;

  display: flex;
  flex-direction: column;
`;

export const Day = styled.div<{ week?: String }>`
  width: 100%;
  height: 20%;
  display: flex;

  align-items: center;
  padding-left: 10px;
  padding-top: 10px;

  color: ${(props) =>
    props.week === '토'
      ? '#481FEB'
      : props.week === '일'
      ? '#FF613E'
      : 'black'};
`;

export const Box = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  margin-top: 2px;
`;

export const Count = styled.div`
  width: 40px;
  height: 25px;

  margin-left: 10px;
  padding: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  cursor: pointer;

  &:hover {
    background-color: #b0b0b0;
  }
`;

export const Organization = styled.div`
  margin-left: 10px;
`;
