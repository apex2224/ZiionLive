
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'student',
  initialState: {
    name: '',
    email: '',
    phone: '',
    course: ''
  },
  reducers: {
    FormFilled: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => ({
      name: '',
      email: '',
      phone: '',
      course: ''
    })
  }
});

export const { FormFilled, resetForm } = formSlice.actions;
export default formSlice.reducer;
