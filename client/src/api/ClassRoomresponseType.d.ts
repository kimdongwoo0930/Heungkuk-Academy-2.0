export interface ResponseType {
    [key : string] : Detail; // 예약번호 : 예약 데이터
}

interface Detail {
    id: string;
    organization: string;
    date:{
      start : string, end : string
    }
    classroom: classroom[]; 
    room:room;
    food:food;
    customer: customer;
    info: info;
    status: string;
    memo: string;
  
}

interface classroom{
    room : string, start : string, end : string
}

interface room{
    [key : string] : string[] // "2024-06-12 : ["102"]
}

interface food{
  [key : string] : { breakfast : number,
                      lunch : number , 
                      dinner : number, 
                      special : string
                    }
}

interface customer {
  name: string;
  phone1: string;
  phone2: string;
  email: string;
}

interface info{
  purpose: string;
  people: number;
  color: string;
}




