import { Box, Container } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../components/info/BackButton";
import { InfoAvatar } from "../components/info/InfoAvatar";
import { InfoName } from "../components/info/InfoName";
import { InfoTable } from "../components/info/InfoTable";
import { InfoTitle } from "../components/info/InfoTitle";
import { useGetCharacterByIdQuery } from "../store/api";

export const InfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetCharacterByIdQuery(Number(id));

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { mb: 14.5 },
        [theme.breakpoints.down("md")]: { mb: 7.5 },
        p: 3,
      })}
    >
      <BackButton onBack={() => navigate("/")} />
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { mt: 3.5 },
          [theme.breakpoints.down("md")]: { mt: 9.5 },
          textAlign: "center",
          px: 0,
        })}
      >
        <InfoAvatar image={data?.image} />
        <InfoName name={data?.name} />
        <InfoTitle title={data ? "Informations" : ""} />
        <InfoTable item={data} />
      </Container>
    </Box>
  );
};
