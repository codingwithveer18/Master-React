import { createSlice } from "@reduxjs/toolkit";

const privacyslice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacytoggle: (state) => {
      return (state = !state);
    },
  },
});

export const privacyActions = privacyslice.actions;
export default privacyslice;
