// 成员状态
export enum STATES {
  'PENDING',
  'AEEIVE',
  'LEAVE',
  'ABSENT',
}

// 成员
export interface IMember {
  id: string,
  name: string,
  state: STATES,
}

export enum STATETEXT {
  'AEEIVE' = '到位',
  'LEAVE' = '请假',
  'ABSENT' = '迟到',
}

export enum STATECOLOR {
  'AEEIVE' = 'blue',
  'LEAVE' = 'yellow',
  'ABSENT' = 'red',
}

export interface IStateGroutItem {
  members: IMember[],
  state: STATES,
  text: STATETEXT,
  color: STATECOLOR,
}