import { Box, Typography, Grid } from "@mui/material";
import Tag from "./Tag";

export default function TagSection({ title, tags }) {
  return (
    <Box
      sx={{
        width: "100%",
        /* maxWidth: 400, */
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={1.5}>
        {tags.map((tag, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <Tag label={tag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
