import { Box } from "@mui/material";
import FormComponent from "./FormComponent";

export default function FormSection({ fields, onSubmit }) {
  return (
    <Box
      sx={{
        backgroundColor: "#2D2D2D",
        width: "100%",
        padding: { xs: "60px 16px", lg: "80px 48px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, lg: 8 },
          maxWidth: { lg: 1400 },
          margin: "0 auto",
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src="/formimage.png"
          alt="Imagem de um personagem sentado em frente a uma máquina cheia de fios"
          sx={{
            maxWidth: { xs: 300, lg: 400 },
            width: "100%",
            height: "auto",
            flex: { lg: "0 0 auto" },
          }}
        />

        {/* FORM */}
        <FormComponent
          title="Lorem ipsum dolor sit amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque"
          warning="*Lorem ipsum dolor sit amet consectetur"
          fields={fields}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  );
}
