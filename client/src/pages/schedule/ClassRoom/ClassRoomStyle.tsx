import styled from 'styled-components';

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
  background-color: white;
  width: 95%;
  height: 95%;
`;

export const ButtonContainer = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  margin-bottom: 20px;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
  flex-direction: column;
`;

export const DateBtn = styled.div`
  width: 50px;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #0087d4;
  }
`;
export const DateText = styled.div`
  width: 100px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #0087d4;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 50px;
  min-height: 40px;
  display: flex;
`;

export const Title = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: #0087d4;

  font-size: 14px;

  opacity: 0.5;
`;

export const Days = styled.div<{ days: number }>`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.days}, 1fr);
  background-color: #f1f1f1;
  gap: 0;
`;

export const Day = styled.div<{ week: String }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 14px;

  border-left: 1px solid #b3bbc0;
  color: ${(props) =>
    props.week === '토'
      ? '#481FEB'
      : props.week === '일'
      ? '#FF613E'
      : 'black'};
  /* box-shadow: 0 0 0 0.5px #ccc; */
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const ScheduleBar = styled.div`
  width: 100%;
  min-height: 30px;
  max-height: 50px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: space-between;

  cursor: pointer;

  /* border: 1px solid #b3bbc0; */
  box-shadow: 0 0 0 0.5px #ccc;
`;

export const ClassContainer = styled.div`
  width: 100%;
  min-height: 40px;
  max-height: 40px;

  display: flex;
`;

export const ClassTitle = styled.div`
  width: 10%;
  min-height: 40px;
  max-height: 40px;
  display: flex;
  align-items: center;

  font-weight: bold;
  padding-left: 10px;
  /* border: 1px solid #b3bbc0; */
  font-size: 14px;
  box-shadow: 0 0 0 0.5px #ccc;
`;

export const ClassWrapper = styled.div<{ days: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.days}, 1fr);
  gap: 0;
`;

export const Classroom = styled.div`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  box-shadow: 0 0 0 0.5px #ccc;
  position: relative;
`;

export const Bar = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  background-color: lightblue;
  z-index: 1;
  top: 10%;
`;

export const Organization = styled.div`
  width: 200%; // 이건 나중에 바의 개수만큼

  position: absolute;
  padding-left: 10px;

  z-index: 2;

  top: 20%;
`;
