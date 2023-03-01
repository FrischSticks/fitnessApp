import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='30px' mb='30px' backgroundColor='#ffe6e8'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
        <Typography variant='h6' pb='20px'>
          Created by Evan Frische 💪
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer