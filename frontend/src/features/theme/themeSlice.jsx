import { createSlice } from '@reduxjs/toolkit';

const initialThemeColor = localStorage.getItem('selectedColor') || 'bg-blue-300';
const initialDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;

const initialState = {
  themeColor: initialThemeColor,
  isDarkMode: initialDarkMode,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeColor(state, action) {
      state.themeColor = action.payload;
      localStorage.setItem('selectedColor', action.payload);
    },
    toggleDarkMode(state, action) {
      state.isDarkMode = action.payload;
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
  },
});

export const { setThemeColor, toggleDarkMode } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export default themeSlice.reducer;
