import { setSelector } from 'common/utils/state.utils'

const defaultSettings = () => ({
  name: '',
  corporateEmail: '',
  seats: 0,
  office: '',
  time: '',
  status: 'loading',
  id: '',
})

const list = () => ({
  SET_BOOKING_STATUS: (currentState, action) => {
    return { ...currentState, status: action.value }
  },
  SET_BOOKING_DATA: (currentState, action) => {
    return { ...currentState, ...action.value }
  },
})

export default setSelector(list, defaultSettings())
