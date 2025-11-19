import { Box, Typography } from "@mui/material";

export default function DownloadCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#320A63",
        borderRadius: 3,
        padding: 3,
        maxWidth: { xs: 360, lg: 900 },
        margin: "0 auto",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "stretch", lg: "center" },
        gap: { xs: 0, lg: 4 },
      }}
    >
      {/* LEFT SIDE - TEXT */}
      <Box sx={{ flex: { xs: "1", lg: "1" } }}>
        {/* TITLE */}
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          mb={1}
          sx={{ fontSize: { xs: "1.25rem", lg: "1.75rem" } }}
        >
          Lorem ipsum dolor sit amet consectetur
        </Typography>

        {/* DESCRIPTION */}
        <Typography 
          variant="body2" 
          mb={{ xs: 3, lg: 0 }} 
          sx={{ 
            opacity: 0.9,
            fontSize: { xs: "0.875rem", lg: "1rem" }
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
          sit scelerisque quis commodo aenean viverra
        </Typography>
      </Box>

      {/* RIGHT SIDE - BUTTONS */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        gap: 2,
        minWidth: { xs: "100%", lg: "150px" },
        maxWidth: { lg: "150px" }
      }}>
        {/* APP STORE BUTTON */}
        <Box
          component="img"
          src="/applestore.png"
          alt="Download na App Store"
          sx={{
            width: "100%",
            borderRadius: 2,
            cursor: "pointer",
            display: "block",
          }}
        />

        {/* GOOGLE PLAY BUTTON */}
        <Box
          component="img"
          src="/playstore.png"
          alt="Download no Google Play"
          sx={{
            width: "100%",
            borderRadius: 2,
            cursor: "pointer",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
