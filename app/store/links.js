import { defineStore } from 'pinia'

export const useLinksStore = defineStore('links', {
  state: () => ({
    links: [
      {
        to: '/',
        label: 'Issuance',
        status: false
      },
      {
        to: '/remittance',
        label: 'Remittance',
        status: false
      },
      {
        to: '/transaction',
        label: 'transaction',
        status: false
      },
      {
        to: '/report',
        label: 'report',
        status: false
      }
    ]
  })
})
