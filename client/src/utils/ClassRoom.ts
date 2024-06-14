import { ResponseType } from '../api/ClassRoomresponseType';
  // 특정 달의 모든 날짜와 요일을 반환하는 함수
export const getMonthDaysAndWeekdays = (
    year: number,
    month: number
  ): { day: number; weekday: string }[] => {
    const date = new Date(year, month - 1, 1); // JavaScript의 월은 0부터 시작 (0: January, 11: December)
    const daysInMonth = new Date(year, month, 0).getDate(); // 해당 월의 마지막 날 구하기
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

    const monthDaysAndWeekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      date.setDate(day);
      const weekday = weekdays[date.getDay()]; // 요일 구하기
      monthDaysAndWeekdays.push({ day, weekday });
    }

    console.log(monthDaysAndWeekdays.length);

    return monthDaysAndWeekdays;
  };



  export interface TransformedReservation {
    id: string;
    organization: string;
    start: string;
    end: string;
  }
  
  export const transformReservations = (reservations: ResponseType): example => {
    return Object.values(reservations).reduce((acc, reservation) => {
      reservation.classroom.forEach(classroom => {
        const room = classroom.room;
        if (!acc[room]) {
          acc[room] = [];
        }
        acc[room].push({
          id: reservation.id,
          organization: reservation.organization,
          start: classroom.start,
          end: classroom.end
        });
      });
      return acc;
    }, {} as example);
  };
  
  export interface example{
    [key: string]: TransformedReservation[];
  }

  export const createReservationList = (reservations: TransformedReservation[], date : number) => {
    
    const reservationList : (string | null)[] = new Array(date).fill(null);

    reservations.map((info) => {
      const start = info.start.split("-")[2]
      const end = info.end.split("-")[2]

      reservationList.fill(info.id,parseInt(start)-1,parseInt(end))
    })

    console.log(reservationList)

  
    
  
    return reservationList;
  };