import { defineStore } from 'pinia'

export const useAFASStore = defineStore('afas', {
  state: () => {
    return {
      shift: '',
      branch: '',
      sub_branch: '',
      cashier_name: '',
      cashier_signature: '',
      kinds_of_token: [],
      issuers_details: [],
      denomination: [],
      total_sale_amounnt: 0,
      charge_overage_shortage: 0,
      remarks: '',
      remitted_by: ''
    }
  }
})
