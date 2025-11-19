import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import ImagePanel from "./components/ImagePanel";
import ContentSection from "./components/ContentSection";
import DownloadCard from "./components/DownloadCard";
import TagSection from "./components/TagSection";
import CardList from "./components/CardList";
import FormSection from "./components/FormSection";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#EAE8E4',
        },
      },
    },
  },
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const menuItems = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4"];

  const tags = [
    "Perfumaria", "Corpo e banho", "Hidratante", "Desodorante",
    "Cabelos", "Maquiagem", "Rosto", "Casa",
    "Infantil", "Shampoo", "Sabonete", "Body splash",
    "Óleo corporal", "Corretivo", "Proteção solar"
  ];

  const cards = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      buttonLabel: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      buttonLabel: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      buttonLabel: "Lorem ipsum",
    },
  ];

  const formFields = [
    { name: "field1", placeholder: "Categoria*", required: true },
    { name: "field2", placeholder: "Categoria", required: false },
    { name: "field3", placeholder: "Categoria*", required: true },
    { name: "field4", placeholder: "Categoria", required: false },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const contentSections = [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo.",

      cards: [
        {
          image: "/image1.png",
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          image: "/image2.png",
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          image: "/image3.png",
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          image: "/image4.png",
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur."
        }
      ]
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo.",

      gallery: [
        "/image5.png",
        "/image6.png",
        "/image7.png"
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <ImagePanel />
        <Hero />
        <Header onMenuClick={handleMenuClick} menuOpen={menuOpen} menuItems={menuItems} />
        <MobileMenu open={menuOpen} onClose={handleMenuClose} />
        <Box sx={{ position: "relative", zIndex: 1, top: "100vh" }}>
          <ContentSection sections={contentSections} />
          <Box sx={{ padding: "40px 16px" }}>
            <DownloadCard />
          </Box>
          <Box sx={{ padding: "40px 16px", display: "flex", justifyContent: "center" }}>
            <TagSection
              title="Lorem ipsum dolor sit amet consectetur"
              tags={tags}
            />
          </Box>
          <Box sx={{ padding: "40px 16px" }}>
            <CardList items={cards} />
          </Box>
          <FormSection fields={formFields} onSubmit={handleFormSubmit} />
          <Divider />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
