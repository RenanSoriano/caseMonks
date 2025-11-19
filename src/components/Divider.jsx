import { Box } from "@mui/material";

export default function Divider() {
  return (
    <Box
      sx={{
        backgroundColor: "#2D2D2D",
        height: "25px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "24px",
          right: "24px",
          height: "1px",
          backgroundColor: "#DFBBFE",
        },
      }}
    />
  );
}
