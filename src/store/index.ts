import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { IMember, STATES, IStateGroutItem, STATETEXT, STATECOLOR } from '../types'
import { getShortName } from '../utils'

export const useMbStore = defineStore('mb', {
  state: () => {
    const members: IMember[] = [
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
      key: '',
      members,
    }
  },
  getters: {
    pandings: (state): IMember[] => state.members.filter((m) => m.state === STATES.PENDING && (m.name.toLowerCase().includes(state.key.toLowerCase()) || getShortName(m.name).toLowerCase().startsWith(state.key.toLowerCase()))),
    stateGroup: (state): IStateGroutItem[] => {
      return [
        {
          state: STATES.AEEIVE,
          members: state.members.filter((m) => m.state === STATES.AEEIVE),
          text: STATETEXT.AEEIVE,
          color: STATECOLOR.AEEIVE,
        },
        {
          state: STATES.LEAVE,
          members: state.members.filter((m) => m.state === STATES.LEAVE),
          text: STATETEXT.LEAVE,
          color: STATECOLOR.LEAVE,
        },
        {
          state: STATES.ABSENT,
          members: state.members.filter((m) => m.state === STATES.ABSENT),
          text: STATETEXT.ABSENT,
          color: STATECOLOR.ABSENT,
        },
      ]
    }
  },
  actions: {
    setState(payload: { id: string, state: STATES }) {
      this.members.find((m) => m.id === payload.id)!.state = payload.state
    },
    resetKey() {
      this.key = ''
    },
  },
})