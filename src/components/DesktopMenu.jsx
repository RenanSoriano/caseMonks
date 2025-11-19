import { Box, Button } from "@mui/material";

export default function DesktopMenu({ items }) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 3,
        alignItems: "center",
      }}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          sx={{
            color: "#fff",
            textTransform: "none",
            fontSize: "0.95rem",
            fontWeight: 400,
            padding: "8px 0",
            minWidth: "auto",
            position: "relative",
            "&:hover": {
              backgroundColor: "transparent",
              fontWeight: "bold",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: "-12px",
                fontSize: "1.2rem",
              },
            },
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}
