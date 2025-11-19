import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function FormComponent({ title, description, warning, fields, onSubmit }) {
  const [formData, setFormData] = useState({});
  const [captchaResult, setCaptchaResult] = useState("");
  const [captchaMessage, setCaptchaMessage] = useState("");
  const [captchaValid, setCaptchaValid] = useState(null);

  const num1 = 427;
  const num2 = 628;
  const expectedResult = num1 + num2;

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaResult(value);
    
    if (value === "") {
      setCaptchaMessage("");
      setCaptchaValid(null);
      return;
    }

    const userAnswer = parseInt(value);
    if (userAnswer === expectedResult) {
      setCaptchaMessage("Resposta correta!");
      setCaptchaValid(true);
    } else {
      setCaptchaMessage("Resposta incorreta. Tente novamente.");
      setCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaResult) === expectedResult) {
      onSubmit?.(formData);
      alert("Formulário enviado com sucesso!");
    } else {
      setCaptchaMessage("Verificação de segurança incorreta!");
      setCaptchaValid(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#EAE8E4",
        borderRadius: "20px",
        padding: { xs: 4, lg: 5 },
        maxWidth: { xs: 400, lg: 700 },
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        mb={2}
        sx={{ fontSize: { xs: "1.5rem", lg: "2rem" } }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION */}
      <Typography 
        variant="body2" 
        color="text.secondary" 
        mb={1}
        sx={{ fontSize: { xs: "0.875rem", lg: "1rem" } }}
      >
        {description}
      </Typography>
      {/* WARNING */}
      <Typography 
        variant="body2" 
        color="text.secondary" 
        mb={3}
        sx={{ fontSize: { xs: "0.875rem", lg: "1rem" } }}
      >
        {warning}
      </Typography>

      {/* DYNAMIC FIELDS */}
      <Box sx={{ 
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        gap: 2,
        mb: 2
      }}>
        {fields.map((field, index) => (
          <TextField
            key={index}
            fullWidth
            placeholder={field.placeholder}
            required={field.required}
            type={field.type || "text"}
            onChange={(e) => handleChange(field.name, e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        ))}
      </Box>

      {/* SECURITY VERIFICATION */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "flex-start", lg: "center" },
        gap: { xs: 2, lg: 3 },
        mb: 3,
        mt: 3
      }}>
        <Typography 
          variant="h6" 
          fontWeight="600"
          sx={{ 
            fontSize: { xs: "1rem", lg: "1.1rem" },
            whiteSpace: "nowrap"
          }}
        >
          Verificação de segurança
        </Typography>

        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 1.5,
          flex: { lg: 1 },
          maxWidth: { lg: "60%" }
        }}>
          <Typography variant="h6" sx={{ color: "#7b2cbf", fontWeight: "bold" }}>
            {num1}
          </Typography>
          <Typography variant="h6" fontWeight="bold">+</Typography>
          <Typography variant="h6" sx={{ color: "#7b2cbf", fontWeight: "bold" }}>
            {num2}
          </Typography>
          <Typography variant="h6" fontWeight="bold">=</Typography>
          <TextField
            placeholder="Resultado*"
            value={captchaResult}
            onChange={(e) => handleCaptchaChange(e.target.value)}
            required
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />
        </Box>
      </Box>

      {/* VALIDATION MESSAGE */}
      {captchaMessage && (
        <Typography
          variant="body2"
          sx={{
            color: captchaValid ? "#2e7d32" : "#d32f2f",
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "0.875rem", lg: "1rem" }
          }}
        >
          {captchaMessage}
        </Typography>
      )}

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#DFBBFE",
          textTransform: "none",
          fontWeight: 600,
          py: 1.5,
          borderRadius: "10px",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#b95dff",
          },
        }}
      >
        Lorem ipsum
      </Button>
    </Box>
  );
}
