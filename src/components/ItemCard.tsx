import { AspectRatio } from "@mui/joy";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const ItemCard: React.FC = () => {
  return (
    <Card
      sx={{
        borderRadius: "4px",
        boxShadow:
          "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
      }}
    >
      <CardActionArea>
        <AspectRatio ratio="4/3">
          <CardMedia
            component="img"
            image="logo.png"
            alt="rick"
            sx={{
              height: "100%",
              minHeight: "168px",
            }}
          />
        </AspectRatio>
        <CardContent sx={{ py: "12px" }}>
          <Typography
            sx={{
              mb: "1px",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0.15px",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            Rick
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "21px",
              letterSpacing: "0.25px",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            cucumber
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
