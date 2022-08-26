import { Box, Drawer, IconButton, Container, Stack, Link as MuiLink, Divider } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, Fragment } from 'react'
import { useRouter } from "next/router";
import { ROUTE_LIST } from './routes';
import Link from "next/link";
import clsx from 'clsx';

export function HeaderMobile() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <Box display={{ xs: 'block', md: 'none' }} mb={1}>
      <Stack sx={{ position: 'absolute', right: '10px' }}>
        <IconButton size="large" edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Stack>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box pt={2} width='200px' textAlign='center' role='presentation'>
          <Container >
            <Stack direction="column" alignItems="flex-start" fontSize="24px" width="100%">
              {ROUTE_LIST.map(route => (
                <Fragment key={route.path}>
                  <Link href={route.path} passHref>
                    <MuiLink sx={{ ml: 2, fontWeight: "medium" }} className={clsx({ active: router.pathname === route.path })} >
                      {route.label}
                    </MuiLink>
                  </Link>
                  <Divider sx={{ mb: 2 }} flexItem />
                </Fragment>
              ))}
            </Stack>
          </Container>
        </Box>

      </Drawer>
    </Box>
  );
}
