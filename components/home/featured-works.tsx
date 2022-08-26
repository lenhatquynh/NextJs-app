import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import * as React from 'react';
import Link from 'next/link';
import { PostCard } from './post-card';
import { Post, Work } from '@/models/index';
import { WorkList } from '../work';

export function FeaturedWorks() {
    // dự định làm {call api to get featured work}
    //fake data here
    const workList: Work[] = [{
        id: '1',
        title: 'Designing Dashboards',
        tagList: ['Dashboard'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: '',
        createdAt: '1661523013208',
        updatedAt: '1661523013208',
        thumbnailUrl: 'https://res.cloudinary.com/dckopw91s/image/upload/v1661529280/next-app/item1_ovjoyb.jpg'
    }, {
        id: '2',
        title: 'Vibrant Portraits of 2020',
        tagList: ['Illustration'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: '',
        createdAt: '1559523013208',
        updatedAt: '1659523013208',
        thumbnailUrl: 'https://res.cloudinary.com/dckopw91s/image/upload/v1661529280/next-app/item2_ugaqh8.jpg'
    }, {
        id: '3',
        title: '36 Days of Malayalam type',
        tagList: ['Typography'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: '',
        createdAt: '1351523013208',
        updatedAt: '1651523013208',
        thumbnailUrl: 'https://res.cloudinary.com/dckopw91s/image/upload/v1661529280/next-app/item3_rhlmip.jpg'
    }
    ]

    return <Box component="section" pt={2} py={4}>
        <Container >
            <Stack direction="row" mb={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Typography fontSize={{ xs: '18px', md: '22px' }} >Featured Works</Typography>
            </Stack>
            <WorkList workList={workList} />
        </Container >
    </Box >
}
