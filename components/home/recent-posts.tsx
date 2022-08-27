import { Post } from '@/models/index';
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';

export function RecentPosts() {
    // dự định làm {call api to get recent post}
    //fake data here
    const postList: Post[] = [{
        id: '1',
        title: 'Making a design system from scratch',
        publishedDate: '2022-06-15T03:00:00Z',
        tagList: ['Design', 'Pattern'],
        desciption: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        slug: ''
    }, {
        id: '2',
        title: 'Creating pixel perfect icons in Figma',
        publishedDate: '2022-06-15T03:00:00Z',
        tagList: ['Figma', 'Icon Design'],
        desciption: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        slug: ''
    }
    ]

    return <Box component="section" bgcolor="secondary.light" pt={2} py={4}>
        <Container>
            <Stack direction="row" mb={2} justifyContent={{ xs: 'center', md: 'space-between' }}>
                <Typography fontSize={{ xs: '18px', md: '22px' }}>Recent Posts</Typography>
                <Link passHref href="/blog">
                    <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' }, color: '#00A8CC' }}>View all</MuiLink>
                </Link>
            </Stack>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                sx={{
                    '& > div': {
                        width: {
                            xs: "100%",
                            md: "50%"
                        }
                    }
                }}
            >
                {postList.map(post => (
                    <Box key={post.id}>
                        <PostCard post={post} />
                    </Box>
                ))}
            </Stack>
        </Container >
    </Box >
}
