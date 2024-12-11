import { atom } from 'recoil'

export const namesState = atom({
    key: 'namesState',
    default: ['Name1', 'Name2','Name3','Name4','Name5','Name6','Name7','Name8','Name9','Name10',],
})

export const pricesState = atom({
    key: 'pricesState',
    default: [3333, 4444, 1111, 2456, 6677, 5555, 6623, 1112, 4446, 7788],
})
