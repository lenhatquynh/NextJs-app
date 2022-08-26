import { Box, Stack } from '@mui/material';
import { LayoutProps } from '../../models';
import { Footer, Header } from '../common';


export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
