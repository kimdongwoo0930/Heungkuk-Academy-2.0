import { TransformedReservation, example } from './../../utils/ClassRoom';
export interface TableDateType {
  selectedDate: Date;
  setSelectDate: (date: Date) => void;
}

export interface TableHeadType {
  DaysAndWeekdaysList: {
    day: number;
    weekday: string;
  }[];
  selectedDate: Date;
}

export interface TableBodyType{
  DaysAndWeekdaysList: {
    day: number;
    weekday: string;
  }[];
  selectedDate : Date;
  Data:example;
}

export interface openBarType{
  대강의실 : boolean,
  중강의실 : boolean,
  소강의실 : boolean,
  분임실: boolean,
  다목적실 : boolean
}




