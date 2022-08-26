import * as React from 'react';
import { Box } from '@mui/system';
import { Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import avatar from '@/images/avatar.png'
export function HeroSection() {
  return <Box component="section" pt={{ xs: 4, md: 14 }} pb={{ xs: 7, md: 9 }}>
    <Container>
      <Stack spacing={12} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
        <Box>
          <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
            Hi, I am Quynh,<br />
            Frontend Developer
          </Typography>

          <Typography mb={{ xs: 3.5, md: 5 }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Typography>
          <Button variant="contained" size="large" >Download Resume</Button>
        </Box>

        <Box sx={{ minWidth: '240px', boxShadow: '-5px 13px', color: '#EDF7FA', borderRadius: '50%' }}>
          <Image src={avatar} layout='responsive' alt='avatar' priority />
        </Box>
      </Stack>
    </Container>
  </Box >
}
