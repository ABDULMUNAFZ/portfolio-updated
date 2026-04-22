import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SlideState = {
  suscribe: number;
  direction: string;
};

type FullpageState = {
  [key: string]: SlideState;
};

const initialState: FullpageState = {
  first: {
    suscribe: 0,
    direction: "",
  },
  second: {
    suscribe: 0,
    direction: "",
  },
  third: {
    suscribe: 0,
    direction: "",
  },
  fourth: {
    suscribe: 0,
    direction: "",
  },
  fifth: {
    suscribe: 0,
    direction: "",
  },
  sixth: {
    suscribe: 0,
    direction: "",
  },
};

const FullpageSlice = createSlice({
  name: "fullpage",
  initialState,
  reducers: {
    setActiveSlide: (
      state,
      { payload }: PayloadAction<[anchor: string, direction: string]>
    ) => {
      const [anchor, direction] = payload;
      if (state[anchor]) {
        state[anchor] = { suscribe: state[anchor].suscribe + 1, direction };
      }
    },
  },
});

export const { setActiveSlide } = FullpageSlice.actions;

export default FullpageSlice.reducer;
