// 成员状态
export enum STATUS {
  'PENDING',
  'AEEIVE',
  'LEAVE',
  'ABSENT',
}

// 成员
export interface member {
  id: string,
  name: string,
  status: STATUS,
}