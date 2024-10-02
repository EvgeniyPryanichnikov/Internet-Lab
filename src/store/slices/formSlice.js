import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  phone: null,
  agreement: false
}

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },

    setAgree:(state, action) => {
      state.agreement = action.payload
    }
  }
})

export const {
  setName,
  setPhone,
  setAgree
} = formSlice.actions

export default formSlice.reducer


