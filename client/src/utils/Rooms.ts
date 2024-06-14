export interface DateInfo {
    date: number;
    day: number;
  }


export const getDaysInMonth = (
    year: number,
    month: number
  ): (DateInfo | null)[]  => {
    const date = new Date(year, month, 1);
    const days: (DateInfo | null)[] = [];
    const firstDayIndex = date.getDay(); // 첫 날의 요일 인덱스
  
    // 첫 주의 빈 칸 추가
    for (let i = 0; i < firstDayIndex; i++) {
        days.push(null);
      }
    
      while (date.getMonth() === month) {
        days.push({
          date: date.getDate(),
          day: date.getDay()
        });
        date.setDate(date.getDate() + 1);
      }
    
      // 마지막 주의 빈 칸 추가
      const lastDay = days[days.length - 1];
      if (lastDay) {
        const lastDayIndex = lastDay.day;
        for (let i = lastDayIndex + 1; i < 7; i++) {
          days.push(null);
        }
      }
    
    
      return days;
    };