import React from "react";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <>
      <Box
        sx={{
          "@media print": {
            position: "fixed",
            top: "0pt",
          },
          "@page": { "@top-center": "center" },

          padding: "20px",
          textAlign: "center",
          backgroundColor: "rgba(25, 25, 255, 0.5)",
        }}
      >
        <h1>This is the Header</h1>
      </Box>
    </>
  );
};

export default Header;
