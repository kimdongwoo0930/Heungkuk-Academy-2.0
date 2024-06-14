interface Rooms {
  [key: string]: (number | string)[];
}

export const rooms: Rooms = {
  대강의실: [105],
  중강의실: [201, 203, 204],
  소강의실: [102, 103, 202],
  분임실: [106, 205, 206],
  다목적실: ['A', 'B'],
};

export const weeks:String[] = [
  "일","월","화","수","목","금","토"
]
