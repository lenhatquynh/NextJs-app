import { MainLayout } from "@/components/layout";
import { Box, Container, Typography } from "@mui/material";

export interface WorksPageProps {
}

export default function WorksPage(props: WorksPageProps) {
  return (
    <Box>
      <Container>
        <Typography variant="h3" color={'secondary'}> Developing...</Typography>
      </Container>
    </Box>
  );
}
WorksPage.Layout = MainLayout