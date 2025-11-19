import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid
} from "@mui/material";

export default function ContentSection({
  sections = [] // array of dynamic blocks
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#eae6e2",
        width: "100%",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: 480, md: 960, lg: 1400, xl: 1600 },
          width: "100%",
          padding: { xs: "0 16px", md: "0 32px", lg: "0 48px" },
        }}
      >
      {sections.map((section, index) => (
        <Box key={index} mb={5}>
          
          {/* HEADER */}
          {section.title && (
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              mb={1}
              sx={{ fontSize: { xs: "1.25rem", md: "1.75rem", lg: "2rem" } }}
            >
              {section.title}
            </Typography>
          )}

          {/* DESCRIPTION */}
          {section.description && (
            <Typography
              variant="body2"
              color="text.secondary"
              mb={3}
              sx={{ fontSize: { xs: "0.875rem", md: "1rem", lg: "1.1rem" } }}
            >
              {section.description}
            </Typography>
          )}

          {/* CARD GRID */}
          {section.cards && section.cards.length > 0 && (
            <Grid container spacing={2} mb={4} justifyContent="center">
              {section.cards.map((card, i) => (
                <Grid item xs={12} md={6} lg={3} key={i}>
                  <Card elevation={3} sx={{ borderRadius: 3, padding: 1 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={card.image}
                      alt={card.title}
                      sx={{ borderRadius: 2 }}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* GALLERY */}
          {section.gallery && section.gallery.length > 0 && (
            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", lg: "row" }, 
              gap: 2,
              maxHeight: { lg: "400px" }
            }}>
              {/* Left Column - First Image */}
              {section.gallery[0] && (
                <Box sx={{ flex: { xs: "1", lg: "1" } }}>
                  <Box
                    component="img"
                    src={section.gallery[0]}
                    alt="Galeria de imagens"
                    sx={{
                      width: "90%",
                      height: { xs: "auto", lg: "100%" },
                      borderRadius: 3,
                      display: "block",
                      objectFit: "cover"
                    }}
                  />
                </Box>
              )}
              
              {/* Right Column - Second and Third Images Stacked */}
              <Box sx={{ 
                flex: { xs: "1", lg: "1" },
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}>
                {section.gallery[1] && (
                  <Box
                    component="img"
                    src={section.gallery[1]}
                    alt="Galeria de imagens"
                    sx={{
                      width: "100%",
                      height: { xs: "auto", lg: "50%" },
                      borderRadius: 3,
                      display: "block",
                      objectFit: "cover",
                      flex: 1
                    }}
                  />
                )}
                {section.gallery[2] && (
                  <Box
                    component="img"
                    src={section.gallery[2]}
                    alt="Galeria de imagens"
                    sx={{
                      width: "100%",
                      height: { xs: "auto", lg: "50%" },
                      borderRadius: 3,
                      display: "block",
                      objectFit: "cover",
                      flex: 1
                    }}
                  />
                )}
              </Box>
            </Box>
          )}

        </Box>
      ))}
      </Box>
    </Box>
  );
}
