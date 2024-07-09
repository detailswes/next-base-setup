import { createSlice } from "@reduxjs/toolkit";

type Payload = {
  message: string;
  type: string;
};

const toastSliceInitalVal: Payload = {
  message: "",
  type: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: toastSliceInitalVal,
  reducers: {
    setToast: (state, actions) => {
      console.log(actions.payload, "state");
      const { message, type } = actions.payload;
      state.message = message;
      state.type = type;
    },
  },
});

export const { setToast } = toastSlice.actions;

export default toastSlice.reducer;
