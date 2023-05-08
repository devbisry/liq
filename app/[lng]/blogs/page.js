"use client";

import { Container, Grid } from "@mui/material";
import BlogPostCard from "./components/BlogPostCard";


const sortedPosts = [
    {
        id: 1,
        title: "Blog Post 1",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 2,
        title: "Blog Post 2",
        comment: 34343431,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 100000,
        share: 100000000000,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 3,
        title: "Blog Post 3",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 4,
        title: "Blog Post 1",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 5,
        title: "Blog Post 2",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 6,
        title: "Blog Post 3",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 7,
        title: "Blog Post 1",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 8,
        title: "Blog Post 2",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
    {
        id: 9,
        title: "Blog Post 3",
        comment: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
        cover: "https://source.unsplash.com/random",
        view: 1,
        share: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://source.unsplash.com/random"
        },
        createdAt: "2021-09-01T12:00:00.000Z"
    },
]

export default function Blogs() {
    return (
        <Container>
            <h1>Blogs</h1>
            <Grid container spacing={3}>
            {sortedPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
    )
}