import { setSelector } from 'common/utils/state.utils'

const defaultSettings = () => ({
  event: {
    name: '',
    eventStartTime: '',
    eventEndTime: '',
    address: '',
    availableTimes: [],
  },
  acceptedDomains: [],
  shouldRefresh: true,
})

const list = () => ({
  SET_COMPANY_DATA: (currentState, action) => {
    return { ...currentState, ...action.value }
  },
  SET_COMPANY_STATUS: (currentState, action) => {
    return { ...currentState, status: action.value }
  },
})

export default setSelector(list, defaultSettings())
