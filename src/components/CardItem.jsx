import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function CardItem({ title, description, buttonLabel }) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "0 0 12px rgba(0,0,0,0.15)",
        p: 1,
        maxWidth: 380,
        mx: "auto",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 3 }}
        >
          {description}
        </Typography>

        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c77dff",
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#b95dff",
              },
            }}
          >
            {buttonLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
