import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function UserCard(props) {
  const { Data } = props;
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          "@media print": {
            color: "rgba(24,24,244,0.1)",
            backgroundColor: "rgba(25, 255, 255, 0.2)",
            opacity: 0.3,
          },

          backgroundColor: "rgba(25, 255, 255, 0.5)",
        }}
      >
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" component="div">
            {Data.title}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {Data.subtitle}
            </Typography>
            <Typography variant="body2">{Data.value}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
