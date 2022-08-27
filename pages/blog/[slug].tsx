import { MainLayout } from "@/components/layout";
import { Post } from "@/models";
import { getPostList } from "@/utils";
import { Box, Container, Divider } from "@mui/material";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Script from 'next/script';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse/lib";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";

export interface BlogPageProps {
    post: Post
}

export default function PostDetailPage({ post }: BlogPageProps) {
    if (!post) return null
    return (
        <Box>
            <Container>
                <h1>Post detail page</h1>
                <p>{post.title}</p>
                <p>{post.author?.name}</p>
                <p>{post.desciption}</p>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
            </Container>
            <Script src="/prism.js" strategy="afterInteractive"></Script>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList()
    return {
        paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const postList = await getPostList()
    const slug = context.params?.slug
    if (!slug) return { notFound: true }

    const post = postList.find((x) => x.slug === slug)
    if (!post) return { notFound: true }

    //convert markdown to html 
    const file = await unified()
        .use(remarkParse)
        .use(remarkToc, { heading: 'Agenda' })
        .use(remarkPrism)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeDocument, { title: 'Blog detail page' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '')
    post.htmlContent = file.toString()

    return {
        props: {
            post,
        },
    }
}

PostDetailPage.Layout = MainLayout