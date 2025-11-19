import { Box } from "@mui/material";
import CardItem from "./CardItem";

export default function CardList({ items }) {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: { xs: "column", lg: "row" }, 
      gap: 3,
      maxWidth: { lg: 1400 },
      margin: "0 auto"
    }}>
      {items.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          description={item.description}
          buttonLabel={item.buttonLabel}
        />
      ))}
    </Box>
  );
}
