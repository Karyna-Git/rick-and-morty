import { ArrowBack } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { InfoTable } from "../components/InfoTable";
import { StyledLink } from "../components/StyledLink";
import { useGetCharacterByIdQuery } from "../store/api";

export const InfoPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetCharacterByIdQuery(Number(id));

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          mb: 14.5,
        },
        [theme.breakpoints.down("md")]: {
          mb: 7.5,
        },
        p: 3,
      })}
    >
      <StyledLink to="/">
        <Button
          startIcon={<ArrowBack sx={{ width: "24px", height: "24px" }} />}
          sx={{
            pt: 0.25,
            pb: 0.15,
            pl: 0.5,
            pr: 0,
            height: "24px",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "21px",
            color: "black",
          }}
        >
          Go Back
        </Button>
      </StyledLink>
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            mt: 3.5,
          },
          [theme.breakpoints.down("md")]: {
            mt: 9.5,
          },
          textAlign: "center",
          px: 0,
        })}
      >
        <Avatar
          src={data?.image}
          alt="item-photo"
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: "300px",
              height: "300px",
            },
            [theme.breakpoints.down("md")]: {
              width: "150px",
              height: "150px",
            },
            border: "5px solid #F2F2F7",
            margin: "auto",
          })}
        />
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              mt: 2,
              fontSize: "48px",
              lineHeight: "56px",
            },
            [theme.breakpoints.down("md")]: {
              mt: 4,
              fontSize: "32px",
              lineHeight: "38px",
            },
            color: "#081F32",
          })}
        >
          {data?.name}
        </Typography>
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              mt: 6,
            },
            [theme.breakpoints.down("md")]: {
              mt: 4,
              textAlign: "start",
            },
            color: "#8E8E93",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "24px",
          })}
        >
          Informations
        </Typography>
        <InfoTable item={data} />
      </Container>
    </Box>
  );
};
