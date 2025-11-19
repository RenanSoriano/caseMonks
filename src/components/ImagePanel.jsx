import { Box } from "@mui/material";

export default function ImagePanel() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        height: "100vh",
        background: "#2D2D2D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        overflow: "hidden",
        borderBottomRightRadius: { xs: "0", md: "40px" },
      }}
    >
      <img
        src="/logoRepetido.png"
        alt="Logo da Monks"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </Box>
  );
}
