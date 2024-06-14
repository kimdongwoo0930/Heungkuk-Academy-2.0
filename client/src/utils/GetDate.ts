const formatMonth = (month: number): string => {
    return month < 10 ? `0${month}` : `${month}`;
  }
  const formatDay = (day: number): string => {
    return day < 10 ? `0${day}` : `${day}`;
  }


// 날짜 포멧 맞추기
export const makeDateFormat = (currentDate : Date, Day : number) => {
    const year = currentDate.getFullYear().toString()
    const month = formatMonth(currentDate.getMonth()+1)
    const day = formatDay(Day)
    
    
    return  `${year}-${month}-${day}`
    
}

