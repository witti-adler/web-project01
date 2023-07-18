// import React from "react";
// import Box from "@mui/material/Box";
// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           "@media print": {
//             display: "table",
//             tableLayout: "fixed",
//             width: "100%",
//             position: "fixed",
//             bottom: 0,
//             height: "50px",
//             pageBreakAfter: "always",
//           },
//           padding: "20px",
//           textAlign: "center",
//           backgroundColor: "rgba(25, 25, 255, 0.5)",
//         }}
//       >
//         <h1>This is Footer Part</h1>
//       </Box>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import Box from "@mui/material/Box";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          "@media print": {
            position: "fixed",
            bottom: "0pt",
          },
          padding: "20px",
          textAlign: "center",
          backgroundColor: "rgba(25, 25, 255, 0.5)",
        }}
      >
        <h1>This is Footer Part</h1>
      </Box>
    </>
  );
};

export default Footer;
