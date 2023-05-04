"use client";

import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#fff",
          // gap: 2,
        }}
      >
        <Navbar />
        <Header />
        <Footer />
      </Box>
    </>
  );
}
