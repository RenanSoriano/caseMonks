import { Box, Typography, IconButton } from "@mui/material";

export default function Footer() {
  const socialIcons = [
    { src: "/igicon.png", alt: "Instagram" },
    { src: "/wppicon.png", alt: "WhatsApp" },
    { src: "/tticon.png", alt: "Twitter" },
    { src: "/fbicon.png", alt: "Facebook" },
  ];

  const links = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#2D2D2D",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* SOCIAL MEDIA ICONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 3,
          pb: 3,
          /* borderBottom: "1px solid #fff", */
          maxWidth: 300,
          margin: "0 auto",
        }}
      >
        {socialIcons.map((icon, index) => (
          <IconButton
            key={index}
            sx={{
              padding: 0,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{
                width: 30,
                height: 30,
                filter: "brightness(0) invert(1)",
              }}
            />
          </IconButton>
        ))}
      </Box>

      {/* FOOTER LINKS */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {links.map((link, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                opacity: 0.9,
                fontSize: "0.9rem",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
