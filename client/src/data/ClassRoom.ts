import { ResponseType } from "../api/ClassRoomresponseType";

export const exampleData: ResponseType = {
  "123123": {
    id: "123123",
    organization: "업체A",
    date : {
      start : "2024-06-01",
      end : "2024-06-06"
    },
    classroom: [
      { room: "101", start: "2024-06-01", end: "2024-06-03" },
      { room: "102", start: "2024-06-04", end: "2024-06-06" }
    ],
    room: {
       "2024-06-01" :  ["101", "102"] ,
       "2024-06-02" : ["103"] 
    },
    food: {
      "2024-06-01":
      {
        
        breakfast: 20,
        lunch: 30,
        dinner: 25,
        special: "Vegetarian"
      },
      "2024-06-02":
      {
        breakfast: 15,
        lunch: 25,
        dinner: 20,
        special: "Gluten-Free"
      }
    },
    customer: {
      name: "홍길동",
      phone1: "010-1234-5678",
      phone2: "02-123-4567",
      email: "hong@example.com"
    },
    info: {
      purpose: "회의",
      people: 50,
      color: "blue"
    },
    status: "예약",
    memo: "빔 프로젝터 필요"
  },
  "456456": {
    id: "456456",
    organization: "업체B",
    date : {
      start : "2024-06-10",
      end : "2024-06-12"
    },
    classroom: [
      { room: "201", start: "2024-06-10", end: "2024-06-12" }
    ],
    room: {
      "2024-06-10" : ["201"] 
    },
    food: {
      "2024-06-10":
      {
        
        breakfast: 10,
        lunch: 20,
        dinner: 15,
        special: "Halal"
      }
    },
    customer: {
      name: "김철수",
      phone1: "010-9876-5432",
      phone2: "02-987-6543",
      email: "kim@example.com"
    },
    info: {
      purpose: "세미나",
      people: 30,
      color: "green"
    },
    status: "확정",
    memo: "화이트보드 필요"
  },
  "789789": {
    id: "789789",
    organization: "업체C",
    date: {
      start: "2024-07-01",
      end: "2024-07-05"
    },
    classroom: [
      { room: "301", start: "2024-07-01", end: "2024-07-05" }
    ],
    room: {
      "2024-07-01" : ["301"] ,
       "2024-07-02" : ["302", "303"]
    },
    food: {
      "2024-07-01" :
      {
        breakfast: 30,
        lunch: 40,
        dinner: 35,
        special: "Vegan"
      }
    },
    customer: {
      name: "이영희",
      phone1: "010-5678-1234",
      phone2: "02-567-1234",
      email: "lee@example.com"
    },
    info: {
      purpose: "워크샵",
      people: 70,
      color: "red"
    },
    status: "진행중",
    memo: "마이크 필요"
  }
};
