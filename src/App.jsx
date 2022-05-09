import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
