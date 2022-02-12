// 成员状态
export enum STATES {
  'PENDING',
  'AEEIVE',
  'LEAVE',
  'ABSENT',
}

// 成员
export interface member {
  id: string,
  name: string,
  state: STATES,
}