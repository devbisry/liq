"use client";

import { Box, Button, Container, Grid } from "@mui/material";
import BookCard from "./components/bookCard";

const books = [
  {
    title: "Book 1",
    image:
      "https://www.pngitem.com/pimgs/m/170-1707194_free-psd-book-cover-template-book-cover-template.png",
    price: "100",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 2",
    image:
      "https://www.pngitem.com/pimgs/m/170-1707194_free-psd-book-cover-template-book-cover-template.png",
    price: "200",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 1",
    image:
      "https://www.pngitem.com/pimgs/m/98-985756_book-cover-hd-png-download.png",
    price: "100",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 2",
    image:
      "https://www.pngitem.com/pimgs/m/98-985756_book-cover-hd-png-download.png",
    price: "200",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 1",
    image:
      "https://www.pngitem.com/pimgs/m/11-119086_clip-art-the-ultimate-free-d-3d-book.png",
    price: "100",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 2",
    image:
      "https://www.pngitem.com/pimgs/m/11-119086_clip-art-the-ultimate-free-d-3d-book.png",
    price: "200",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 1",
    image:
      "https://www.pngitem.com/pimgs/m/26-268627_book-cover-design-by-venanzio-otterbein-college-hd.png",
    price: "100",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 2",
    image:
      "https://www.pngitem.com/pimgs/m/170-1707194_free-psd-book-cover-template-book-cover-template.png",
    price: "200",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Book 2",
    image:
      "https://www.pngitem.com/pimgs/m/26-268627_book-cover-design-by-venanzio-otterbein-college-hd.png",
    price: "200",
    description:
      "lorem ipsum dolor sit amet conse adipisicing elit. Quisquam, voluptatum.",
  },
];
export default function Books() {
  return (
    <Container
      sx={{
        my: 3,
      }}
    >
      <h1> Dashboard Books are Here </h1>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
