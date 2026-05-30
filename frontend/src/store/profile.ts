import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        name: 'Bred',
        job: 'Fullstack Developer',
        about: 'I build web apps, automate things, and occasionally carry using Meepo.',
    })
})
