// import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import styled from "@emotion/styled";
import './App.css'
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const StyledBox = styled(Box)({
  minHeight: '100vh',
  backgroundImage: 'url(/assets/bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});

function App() {
  return (
    <StyledBox className='classes.root'>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </StyledBox>
  )
}

export default App
