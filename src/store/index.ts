import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { member, STATES } from '../types'

export const useMb = defineStore('mb', {
  state: () => {
    const members: member[] = [
      {
        id: nanoid(),
        name: '刘德华',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '黎明',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '张学友',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '郭富城',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '陈冠希',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '谢霆锋',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '梁朝伟',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '甄子丹',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '周星驰',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '王祖贤',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '郭采洁',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '许冠杰',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '金城武',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '周润发',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '张国荣',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '古天乐',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '张家辉',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '刘青云',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '吴镇宇',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: '迪丽热巴',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: 'Lionel Messi',
        state: STATES.PENDING,
      },
      {
        id: nanoid(),
        name: 'Cristiano Ronaldo',
        state: STATES.PENDING,
      },
    ]

    return {
      members,
    }
  },
  getters: {
    pandings: (state): member[] => state.members.filter((m) => m.state === STATES.PENDING),
    arrives: (state): member[] => state.members.filter((m) => m.state === STATES.AEEIVE),
    leaves: (state): member[] => state.members.filter((m) => m.state === STATES.LEAVE),
    absents: (state): member[] => state.members.filter((m) => m.state === STATES.ABSENT),
  },
})