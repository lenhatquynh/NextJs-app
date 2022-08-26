import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Icon, Stack, Typography } from "@mui/material";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/quynh.nhat.9634340' },
    { icon: Instagram, url: 'https://www.instagram.com/quynhnhat9/' },
    { icon: Twitter, url: 'https://www.google.com/' },
    { icon: LinkedIn, url: 'https://www.linkedin.com/in/quynh-le-nhat/' },
  ]
  return (
    <Box component="footer" pt={2} pb={6} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((link, index: number) => (
          <Box key={index} component="a" href={link.url} target="_blank" rel="noopener noreferrer" p={2}>
            <Icon component={link.icon} sx={{ fontSize: '48px' }} />
          </Box>
        ))}
      </Stack>
      <Box>
        <Typography>Copyright © {new Date().getFullYear()} All rights reserved</Typography>
      </Box>
    </Box >
  );
}
