import { createSlice } from '@reduxjs/toolkit';

type Theme = 'auto' | 'light' | 'dark';

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: 'auto',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
