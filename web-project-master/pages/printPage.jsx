import React from "react";
import Header from "../components/PrintPage/Header";
import Body from "../components/PrintPage/Body";
import Footer from "../components/PrintPage/Footer";
import useStyles from "../css/printPage";
import Box from "@mui/material/Box";

const PrintPage = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          "@page": {
            size: "A4",
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Box>
    </>
  );
};

export default PrintPage;
