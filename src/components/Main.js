import { Box, Container, Button, Typography } from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import "./Main.css";

const data = [];

const Main = () => {
  return (
    <Container fixed>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="4rem"
      >
        <Box className="title">
          Virtual cards
          <Button
            style={{
              textTransform: "none",
              height: "1rem",
              backgroundColor: "#edf4ff",
              marginLeft: ".5rem",
            }}
            startIcon={<VideocamOutlinedIcon />}
          >
            Learn more
          </Button>
        </Box>
        <Box
          width="9rem"
          height="2rem"
          boxShadow="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Box style={{ fontSize: "1.5rem", marginRight: ".5rem" }}>+</Box>
          <Typography style={{ fontSize: ".85rem", fontWeight: "600" }}>
            Virtual card
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
