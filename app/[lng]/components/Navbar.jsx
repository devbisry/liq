import { Box } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
        backgroundColor: "#223C50",
        color: "#fff",
        width: "100%",
      }}
    >
      <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>ቤተ - ሊቅ</Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        <Box>Home</Box>
        <Box>About</Box>
        <Box>Contact</Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box>Login</Box>
        <Box>Register</Box>
      </Box>
    </Box>
  );
}

export default Navbar;
