import { Seo } from '@/components/common';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { Box } from '@mui/material';
import { MainLayout } from '../components/layout/main';
import { NextPageWithLayout } from '../models/common';

const HomePage: NextPageWithLayout = () => {
  return <Box>
    <Seo
      data={{
        title: "Quynh's Portfolio | Le Nhat Quynh",
        description: "Hi, welcome to my website. My name is Le Nhat Quynh and I'm frontend developer. ",
        url: "https://next-js-app-eta.vercel.app/",
        thumbnailUrl: "https://res.cloudinary.com/dckopw91s/image/upload/v1661540209/next-app/avt_lpdgxb.jpg"
      }}
    />
    <HeroSection />
    <RecentPosts />
    <FeaturedWorks />
  </Box>
}

HomePage.Layout = MainLayout
export default HomePage
