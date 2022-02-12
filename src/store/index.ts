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
    ]

    return {
      members,
    }
  },
})