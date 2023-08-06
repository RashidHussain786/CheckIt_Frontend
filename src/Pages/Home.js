import React from 'react'
import {Box} from '@mui/material'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column'}}>
     <NavBar/>
     <Header/>
     <Footer/>
    </Box>
    </>
  )
}

export default Home