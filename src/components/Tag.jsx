import { Chip } from "@mui/material";

export default function Tag({ label }) {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderRadius: "20px",
        borderColor: "#7b2cbf",
        color: "#7b2cbf",
        background: "#DFDCD5",
        px: 2,
        py: 1,
        fontSize: "0.9rem",
        fontWeight: 500,
      }}
    />
  );
}
