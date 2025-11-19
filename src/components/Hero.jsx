import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: { xs: "50%", md: "50%" },
        height: "100vh",
        background: "#2D2D2D",
        padding: { xs: "100px 30px 60px 30px", md: "120px 80px 80px 80px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        zIndex: 0,
        justifyContent: "space-between",
        borderBottomLeftRadius: { xs: "0", md: "40px" },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 3,
            lineHeight: 1.2,
            fontSize: { xs: "2rem", md: "3.5rem" },
            maxWidth: { xs: "100%", md: "90%" },
          }}
        >
          Lorem ipsum<br />
          dolor sit amet<br />
          consectetur
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: { xs: "0.95rem", md: "1.2rem" },
            lineHeight: 1.6,
            maxWidth: { xs: "100%", md: "85%" },
          }}
        >
          Lorem ipsum dolor sit
          amet consectetur.
          Semper orci adipiscing
          faucibus sit scelerisque
          quis commodo aenean
          viverra
        </Typography>
      </Box>

      <Box sx={{ alignSelf: "center" }}>
        <img
          src="/Scroll.png"
          alt="Role a página"
          style={{ width: "80px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
