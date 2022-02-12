import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { member, STATUS } from '../types'

export const useMb = defineStore('mb', {
  state: () => {
    const members: member[] = [
      {
        id: nanoid(),
        name: '刘德华',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '黎明',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '张学友',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '郭富城',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '陈冠希',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '谢霆锋',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '梁朝伟',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '甄子丹',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '周星驰',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '王祖贤',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '郭采洁',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '许冠杰',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '金城武',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '周润发',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '张国荣',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '古天乐',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '张家辉',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '刘青云',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '吴镇宇',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: '迪丽热巴',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: 'Lionel Messi',
        status: STATUS.PENDING,
      },
      {
        id: nanoid(),
        name: 'Cristiano Ronaldo',
        status: STATUS.PENDING,
      },
    ]

    return {
      members,
    }
  },
  getters: {
    pandings: (state): member[] => state.members.filter((m) => m.status === STATUS.PENDING),
    arrives: (state): member[] => state.members.filter((m) => m.status === STATUS.AEEIVE),
    leaves: (state): member[] => state.members.filter((m) => m.status === STATUS.LEAVE),
    absents: (state): member[] => state.members.filter((m) => m.status === STATUS.ABSENT),
  },
})