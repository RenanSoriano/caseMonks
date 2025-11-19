import { Collapse, Box, List, ListItem, Button } from "@mui/material";

export default function MobileMenu({ open, onClose }) {
  return (
    <Collapse in={open} timeout={0} unmountOnExit>
      <Box sx={{ 
        background: "#e4c2ff", 
        padding: 2,
        marginTop: "-20px",
        paddingTop: "30px",
        position: "relative",
        zIndex: 1,
        width: "100%",
        left: 0
      }}>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item", color: "#2D2D2D", fontWeight: "bold" }}>Categoria 1</ListItem>
          <ListItem sx={{ display: "list-item", color: "#2D2D2D", fontWeight: "bold" }}>Categoria 2</ListItem>
          <ListItem sx={{ display: "list-item", color: "#2D2D2D", fontWeight: "bold" }}>Categoria 3</ListItem>
          <ListItem sx={{ display: "list-item", color: "#2D2D2D", fontWeight: "bold" }}>Categoria 4</ListItem>
        </List>

        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            display: "block",
            margin: "40px auto 0",
            borderRadius: "30px",
            background: "url(/Group.png) no-repeat center",
            backgroundSize: "contain",
            width: "60px",
            height: "60px",
            minWidth: "60px",
            border: "none",
            "&:hover": {
              border: "none",
              background: "url(/Group.png) no-repeat center",
              backgroundSize: "contain",
            }
          }}
        />
      </Box>
    </Collapse>
  );
}
